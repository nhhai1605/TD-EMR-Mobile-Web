import axios, { AxiosInstance } from 'axios';
import qs from 'qs';
import cookie from 'react-cookies';
import { IMessage } from '@core/models/common/responseMessage';
import i18n from '@core/utils/i18n';
import { toggleMessage } from '@core/contexts/SnackbarProvider';
import { getFormUrlEncoded, HTTP_CONTENT_TYPE } from '@core/utils/httpHelper';
import { replaceDateToStringBeforeParseJson } from '@core/utils/dateUtil';
import COOKIE_NAME from '@core/constants/cookie';
import { BehaviorSubject } from 'rxjs';
import moment from 'moment';
import API_PATH from '@core/constants/apiPath';
//import API_PATH from '@core/constants/apiPath';
// import moment from 'moment';
// handle loading
const showLoginWhenExpired$ = new BehaviorSubject<boolean>(false);

export abstract class AxiosInitialize {
  constructor(private _baseURL: string, private _includeToken: boolean) {}

  isRefreshToken = false;

  subscribers = [];

  public clearAllSession() {
    Object.keys(cookie.loadAll()).forEach((item) => {
      cookie.remove(item);
    });
    sessionStorage.clear();
    // redirect to sign in page
    if (window.location.href.indexOf('/login') === -1) {
      window.location.href = `/login?url=${window.location.pathname + window.location.search}`;
    }
  }

  private getInstance = (
    contentType = 'application/json',
    isShowErrorMessage = true
    // responseType: ResponseType = 'json'
  ): AxiosInstance => {
    const authData: any = cookie.load(COOKIE_NAME.AUTH);
    if (this._includeToken && !authData) {
      //this.clearAllSession();
    }
    const instance = axios.create({
      baseURL: this._baseURL,
      headers: {
        'Content-Type': contentType,
        Authorization: this._includeToken && authData ? `${authData?.token_type} ${authData?.access_token}` : undefined,
        PKHID: 250, //dùng để debug trực tiếp lên dataService
      },
      //responseType: responseType,
    });
    instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      async (error) => {
        //Handle exception for your business
        const errorResponse = error.response;
        const errorObj = {
          message: '',
          type: 'error',
        } as IMessage;
        if (errorResponse.status === 401 && !error.config._retry) {
          return this.detectRefreshToken(error, isShowErrorMessage);
        } else if (errorResponse.statusText == 'Unknown Error') {
          errorObj.message = i18n.t('SomethingWentWrong');
        } else {
          //Internal Exception handle
          if (error.message && error.message === 'Network Error') {
            errorObj.message = 'No internet connection';
          } else if (errorResponse && errorResponse.data) {
            if (errorResponse.data.Errors && errorResponse.data.Errors?.length > 0) {
              errorResponse.data.Errors.forEach((item: any, index: number) => {
                errorObj.message += index + 1 + '. ' + item.Message + '\n';
              });
            } else {
              errorObj.message = errorResponse.data.Message;
            }
          }
        }
        // show error
        if (isShowErrorMessage && errorObj && errorObj.message && errorObj.message.length > 0) {
          toggleMessage(errorObj);
        }
        return Promise.reject(errorObj);
      }
    );
    return instance;
  };

  public getAsync<T>(url: string, params?: { [key: string]: any }, isShowErrorMessage = true, contentType?: string): Promise<T> {
    return this.getInstance(contentType, isShowErrorMessage).get(url, {
      params: params,
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
  }

  public postAsync<T>(
    url: string,
    json?: any,
    isShowErrorMessage = true,
    contentType = HTTP_CONTENT_TYPE.APPLICATION_JSON
  ): Promise<T> {
    let body = JSON.stringify(json);
    if (contentType !== HTTP_CONTENT_TYPE.APPLICATION_JSON) {
      body = json;
    } else if (typeof json === 'object') {
      body = replaceDateToStringBeforeParseJson(json);
    }
    return this.getInstance(contentType, isShowErrorMessage).post(url, body);
  }

  public putAsync<T>(url: string, json?: any, isShowErrorMessage = true, contentType?: string): Promise<T> {
    const body = typeof json === 'object' ? replaceDateToStringBeforeParseJson(json) : JSON.stringify(json);
    return this.getInstance(contentType, isShowErrorMessage).put(url, body);
  }

  public deleteAsync<T>(url: string, isShowErrorMessage = true, contentType?: string): Promise<T> {
    return this.getInstance(contentType, isShowErrorMessage).delete(url);
  }

  public detectShowLoginWhenExpired$() {
    return showLoginWhenExpired$;
  }

  public setShowLoginWhenExpired(value) {
    showLoginWhenExpired$.next(value);
  }

  private async refreshAccessToken() {
    const IDENTITY_SERVER_URL = import.meta.env.VITE_IDENTITY_SERVER_ENDPOINT;

    const authData: any = cookie.load(COOKIE_NAME.AUTH);
    if (!authData) {
      return undefined;
    }
    const payload = {
      client_id: 'react_client_id',
      grant_type: 'refresh_token',
      refresh_token: authData.refresh_token,
    };

    const data: any = await this.getInstance(HTTP_CONTENT_TYPE.FORM_URLENCODED, true).post(
      `${IDENTITY_SERVER_URL}${API_PATH.GET_TOKEN}`,
      getFormUrlEncoded(payload)
    );
    if (data && data.access_token) {
      const expire = moment().add(data.expires_in, 's').toDate();
      cookie.save(COOKIE_NAME.AUTH, data, { expires: expire });

      const userData: any = cookie.load(COOKIE_NAME.USER);
      cookie.save(COOKIE_NAME.USER, userData, { expires: expire });

      return data.access_token;
    }
    return undefined;
  }

  private recallApiAfterRefreshToken(config, isShowErrorMessage) {
    const body = config.data ? JSON.parse(config.data) : undefined;
    return this.getInstance(config.headers['Content-Type'], isShowErrorMessage)[config.method](config.url, body);
  }

  onTokenRefreshed(token) {
    this.subscribers.map((cb) => cb({ token }));
  }

  subscribeTokenRefresh(cb) {
    this.subscribers.push(cb);
  }

  private async detectRefreshToken(error, isShowErrorMessage) {
    const originalRequest = error.config;
    if (!this.isRefreshToken) {
      this.isRefreshToken = true;
      const access_token = await this.refreshAccessToken().catch(() => {
        if (isShowErrorMessage) {
          toggleMessage({ type: 'error', message: 'Đã hết phiên làm việc. Vui lòng đăng nhập lại.' });
        }
        this.clearAllSession();
      });
      if (access_token) {
        this.isRefreshToken = false;
        this.onTokenRefreshed(access_token);
        this.subscribers = [];
      }
    }
    return new Promise((resolve) => {
      this.subscribeTokenRefresh(() => {
        resolve(this.recallApiAfterRefreshToken(originalRequest, isShowErrorMessage));
      });
    });
  }
}
