import internalApiService from './base/internalApiService';
import {GetAllPaperReferalRequest} from "../models/param-classes/patient/getAllPaperReferalRequest";
import {PaperReferal} from "../models/patients/paperReferal";

class PaperReferalService {
  getAllPaperReferal(payload: GetAllPaperReferalRequest ) {
	return internalApiService.postAsync('Patient/PaperReferal/GetAllPaperReferal', payload);
  }

  addPaperReferal(payload:PaperReferal) {
	return internalApiService.postAsync('Patient/PaperReferal/AddPaperReferal', payload);
  }

  updatePaperReferal(payload:PaperReferal) {
	return internalApiService.postAsync('Patient/PaperReferal/UpdatePaperReferal', payload);
  }

  deletePaperReferal(payload: number) {
	return internalApiService.postAsync('Patient/PaperReferal/DeletePaperReferal', payload);
  }
  

}
export default new PaperReferalService()