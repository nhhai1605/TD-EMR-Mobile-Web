import { PharmaceuticalCompany_SearchPagingRequest } from '@core/models/param-classes/pharmacy/pharmaceuticalCompanySearchPagingRequest';
import internalApiService from './base/internalApiService';
import { PharmaceuticalCompany } from '../models/reference/pharmaceuticalCompany';

class pharmaceuticalCompanyManagementService {
  getListPharmaceuticalCompany(payload: PharmaceuticalCompany_SearchPagingRequest): Promise<PharmaceuticalCompany> {
    return internalApiService.postAsync('Pharmacy/Pharmaceutical/PharmaceuticalCompany_SearchPaging', payload);
  }

  getListAllCountry() {
    return internalApiService.postAsync('Patient/GetAllCountries');
  }

  insert(payload: PharmaceuticalCompany) {
    return internalApiService.postAsync('Pharmacy/Pharmaceutical/PharmaceuticalCompany_Insert', payload);
  }

  update(payload: PharmaceuticalCompany) {
    const request = payload;
    return internalApiService.postAsync('Pharmacy/Pharmaceutical/PharmaceuticalCompany_Update', request);
  }

  delete(payload: number) {
    return internalApiService.postAsync('Pharmacy/Pharmaceutical/PharmaceuticalCompany_Delete', payload);
  }
}

export default new pharmaceuticalCompanyManagementService();
