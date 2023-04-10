import addressService from './base/addressApiService';

class AddressService {
  getAllProvinces() {
    return addressService.postAsync('Patient/GetAllProvinces');
  }

  getAllSuburbNames() {
    return addressService.postAsync('Patient/GetAllSuburbNames');
  }

  getAllWardNames() {
    return addressService.postAsync('Patient/GetAllWardNames');
  }
  
  getSearchPatients() {
    return addressService.postAsync('Patient/SearchPatients');
  }
}

export default new AddressService();
