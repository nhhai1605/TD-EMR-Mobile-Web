import { HTTP_CONTENT_TYPE } from '@core/utils/httpHelper';
import { AxiosInitialize } from './axiosInitialize';
import cookie from 'react-cookies';
import COOKIE_NAME from '@core/constants/cookie';

class InternalApiService extends AxiosInitialize {
  _apiURL = import.meta.env.VITE_API_ENDPOINT;

  constructor() {
    super('', true);
    const userInfo: any = cookie.load(COOKIE_NAME.USER);
    if (userInfo) {
      this.setApiEndpointUrl(userInfo.apiurl);
    }
  }

  setApiEndpointUrl(url) {
    //SUPPORT FOR DEBUG LOCALHOST
    if (import.meta.env.VITE_API_ENDPOINT.includes('localhost') < 0) {
      this._apiURL = url;
    }
  }

  postAsync<T>(url: string, payload?, isShowErrorMessage = true): Promise<T> {
    return super.postAsync(`${this._apiURL}${url}`, payload, isShowErrorMessage);
  }

  putUploadFileAsync(url: string, payload, isShowErrorMessage = true) {
    return super.postAsync(`${this._apiURL}${url}`, payload, isShowErrorMessage, HTTP_CONTENT_TYPE.FORM_URLENCODED);
  }
}
export default new InternalApiService();
