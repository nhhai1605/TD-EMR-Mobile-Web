import { GetPMRsByPtIDRequest } from "@core/models/param-classes/consultation/getPMRsByPtIDRequest";
import { PatientMedicalFiles_DeleteRequest } from "@core/models/param-classes/consultation/patientMedicalFilesDeleteRequest";
import { PatientMedicalFile } from "@core/models/patients/patientMedicalFile";
import internalApiService from "./base/internalApiService";

class ConsulationService{
  getPMR(payload: GetPMRsByPtIDRequest) {
    return internalApiService.postAsync('Consultation/PMR/GetPMRsByPtID', payload);
  }

  getPatientMedicalFiles(payload: number) {
    return internalApiService.postAsync('Consultation/PMR/PatientMedicalFiles_ByPatientRecID', payload);
  }

  addPatientMedicalFiles(payload: PatientMedicalFile) {
    return internalApiService.postAsync('Consultation/PMR/Insert_PatientMedicalFiles', payload);
  }

  updatePatientMedicalFiles(payload: PatientMedicalFile) {
    return internalApiService.postAsync('Consultation/PMR/PatientMedicalFiles_Update', payload);
  }

  deletePatientMedicalFiles(payload: PatientMedicalFiles_DeleteRequest) {
    return internalApiService.postAsync('Consultation/PMR/PatientMedicalFiles_Delete', payload);
  }

  activePatientMedicalFiles(payload) {
    return internalApiService.postAsync('Consultation/PMR/PatientMedicalFiles_Active', payload);
  }
}

export default new ConsulationService()