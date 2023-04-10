import { AxiosInitialize } from './axiosInitialize';
const ADDRESS_SERVER_URL = import.meta.env.VITE_ADDRESS_ENDPOINT;

class AddressService extends AxiosInitialize {
    constructor() {
        super(ADDRESS_SERVER_URL, true);
    }
}

export default new AddressService();
