import { AxiosInitialize } from './axiosInitialize';
const IDENTITY_SERVER_URL = import.meta.env.VITE_IDENTITY_SERVER_ENDPOINT;

class IdentityService extends AxiosInitialize {
  constructor() {
    super(IDENTITY_SERVER_URL, true);
  }
}

export default new IdentityService();
