import { GetRefTreatmentRegimensAndDetailRequest } from "@core/models/param-classes/consultation/getRefTreatmentRegimensAndDetailRequest";
import { RefTreatmentRegimen } from "@core/models/reference/refTreatmentRegimen";
import internalApiService from "./base/internalApiService";

class TreatmentRegimensService {
  getRefTreatmentRegimens() {
    return internalApiService.postAsync('Consultation/Prescription/GetRefTreatmentRegimens');
  }

  getRefTreatmentRegimensAndDetail(payload: GetRefTreatmentRegimensAndDetailRequest) {
    return internalApiService.postAsync('Consultation/Prescription/GetRefTreatmentRegimensAndDetail', payload);
  }
  
  saveRefTreatmentRegimen(payload: RefTreatmentRegimen) {
    return internalApiService.postAsync('Consultation/Prescription/EditRefTreatmentRegimen', payload);
  }
}

export default new TreatmentRegimensService();