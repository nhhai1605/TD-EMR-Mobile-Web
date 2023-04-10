import cookie from 'react-cookies';
import API_PATH from '../constants/apiPath';
import moment from 'moment';
import identityServerService from './base/identityServerService';
import { getFormUrlEncoded, HTTP_CONTENT_TYPE } from '@core/utils/httpHelper';
import COOKIE_NAME from '@core/constants/cookie';
import internalApiService from './base/internalApiService';
import { parseNumber } from '@core/utils/appHelper';
import mobileService from "./mobileService";

class AuthService {
  async getToken(payload: any) {
    const data = await identityServerService.postAsync<any>(
      API_PATH.GET_TOKEN,
      getFormUrlEncoded(payload),
      true,
      HTTP_CONTENT_TYPE.FORM_URLENCODED
    );
    if (data && data.access_token) {
      const expire = moment().add(data.expires_in, 's').toDate();
      cookie.save(COOKIE_NAME.AUTH, data, { expires: expire });
      return data;
    }
    return undefined;
  }

  getProvider = async () => {
    const response: any = await mobileService.getFacilityDetail('260'); // 260 là PKHID của Viện Tim
    if (response) {
      internalApiService.setApiEndpointUrl(response.serverURL);
      const date = new Date();
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      cookie.save(COOKIE_NAME.USER, response, { expires: date });
    }
  };

  signOut = () => {
    identityServerService.clearAllSession();
  };

  getCurrentUser = () => {
    return cookie.load(COOKIE_NAME.USER);
  };

  getCurrentUserId = () => {
    const userInfo: any = cookie.load(COOKIE_NAME.USER);
    return parseNumber(userInfo?.staffID || 0);
  };

  getCurrentUserName = () => {
    const userInfo: any = cookie.load(COOKIE_NAME.USER);
    return userInfo?.accName || '';
  };
  
  showLoginWhenExpired$ = () => {
    return internalApiService.detectShowLoginWhenExpired$();
  }

  setShowLoginWhenExpired(value) {
    identityServerService.setShowLoginWhenExpired(value);
  }
  
}

export default new AuthService();
