import internalApiService from './base/internalApiService';

class AddressService {
  getAllProvinces() {
    return internalApiService.postAsync('Patient/GetAllProvinces');
  }

  getAllSuburbNames() {
    return internalApiService.postAsync('Patient/GetAllSuburbNames');
  }

  getAllWardNames() {
    return internalApiService.postAsync('Patient/GetAllWardNames');
  }
  
  getSearchPatients() {
    return internalApiService.postAsync('Patient/SearchPatients');
  }
}

export default new AddressService();
