import internalApiService from "./base/internalApiService";
import {Hospital} from "../models/reference/hospital";
import {SearchHospitalsRequest} from "../models/param-classes/patient/searchHospitalsRequest";

class HospitalService {
  
  searchHospitals(payload: SearchHospitalsRequest) {
	return internalApiService.postAsync('Patient/Hospital/SearchHospitals', payload);
  }
  
  searchHospitalByHICode(payload: number) {
	return internalApiService.postAsync('Patient/Hospital/SearchHospitalByHICode', payload);
  }

  addHospital(payload: Hospital) {
	return internalApiService.postAsync('Patient/Hospital/AddHospital', payload);
  }

  updateHospital(payload: Hospital) {
	return internalApiService.postAsync('Patient/Hospital/UpdateHospital', payload);
  }


}
export default new HospitalService()