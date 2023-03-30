import internalApiService from './base/internalApiService';
import { SaveHIItemRequest } from "../models/param-classes/patient/saveHIItemRequest";
import { UpdateHIItemRequest } from "../models/param-classes/patient/updateHIItemRequest";
import { GetAllHealthInsurancesRequest } from "../models/param-classes/patient/getAllHealthInsurancesRequest";

class HealthInsuranceService {
  getAllHealthInsurances(payload: GetAllHealthInsurancesRequest) {
    return internalApiService.postAsync('Patient/HealthInsurance/GetAllHealthInsurances', payload);
  }

  saveHIItem(payload: SaveHIItemRequest) {
    return internalApiService.postAsync('Patient/HealthInsurance/SaveHIItem', payload);
  }

  updateHIItem(payload: UpdateHIItemRequest) {
    return internalApiService.postAsync('Patient/HealthInsurance/UpdateHIItem', payload);
  }

  checkHiCardNo(payload: { cardNo: string, fullName: string, dateOfBirth: Date }) {
    return internalApiService.postAsync('External/CheckHiCardNo', payload);
  }

  saveHiCardCheckLog(payload) {
    return internalApiService.postAsync('Patient/HealthInsurance/HealthInsuranceCardCheckLog_Add', payload)
  }

  getHospitalSetting() {
    return internalApiService.postAsync('Configuration/GetHospitalSetting');
  }
}
export default new HealthInsuranceService()