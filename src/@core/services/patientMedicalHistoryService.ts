import {
  AllergyHistoryModel,
  AtBirthStatusModel,
  DisabilitiesModel,
  DiseaseHistoryModel,
  FamilyMedicalHistoryModel,
  ObstetricHistoryModel,
  RiskFactorHistoryModel,
  SurgeryHistoryModel
}
from "@core/models/patient-medical-history/PatientMedicalHistoryDto";
import internalApiService from "./base/internalApiService";

class PatientMedicalHistoryService {
  createRiskFactorHistory(payload: RiskFactorHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/AddRiskFactorHistory', payload);
  }

  updateRiskFactorHistory(payload: RiskFactorHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/UpdateRiskFactorHistory', payload);
  }

  getPatientRiskFactorHistory(patientId: number){
    return internalApiService.postAsync('Patient/PatientMedicalHistory/GetRiskFactorHistory_ByPatientID', patientId);
  }

  getAtBirthStatus(patientId: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/GetAtBirthStatus_ByPatientID', patientId);
  }

  createAtBrithStatus(payload: AtBirthStatusModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/AddAtBirthStatus', payload);
  }

  updateAtBirthStatus(payload: AtBirthStatusModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/UpdateAtBirthStatus', payload)
  }

  getDisabilities(patientId: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/GetDisabilities_ByPatientID', patientId);
  }

  createDisabilities(payload: DisabilitiesModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/AddDisabilities', payload);
  }

  updateDisabilities(payload: DisabilitiesModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/UpdateDisabilities', payload);
  }

  getAlleryHistory(patientId: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/GetAllergyHistory_ByPatientID', patientId);
  }

  addAlleryHistory(payload: AllergyHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/AddAllergyHistory', payload);
  }

  updateAlleryHistory(payload: AllergyHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/UpdateAllergyHistory', payload)
  }

  deleteAlleryHistory(allergyHisID: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/DeleteAllergyHistory', allergyHisID)
  }

  getDiseaseHistory(patientID: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/GetDiseaseHistory_ByPatientID', patientID);
  }

  addDiseaseHistory(payload: DiseaseHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/AddDiseaseHistory', payload);
  }

  updateDiseaseHistory(payload: DiseaseHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/UpdateDiseaseHistory', payload);
  }

  deleteDiseaseHistory(diseaseHistoryId: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/DeleteDiseaseHistory', diseaseHistoryId);
  }

  searchRefICD9(payload: { 
    searchKey: string,
    pageIndex: number,
    pageSize: number,
    ICD9SearchType: number
   }) {
    return internalApiService.postAsync('Consultation/Diagnosis/SearchRefICD9', payload);
  }

  getPatientFamilyMedicalHistory(patientID: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/GetFamilyMedicalHistory_ByPatientID', patientID);
  }

  addFamilyMedicalHistory(payload: FamilyMedicalHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/AddFamilyMedicalHistory', payload);
  }

  updateFamilyMedicalHistory(payload: FamilyMedicalHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/UpdateFamilyMedicalHistory', payload);
  }

  deleteFamilyMedicalHistory(familyMedicalHisID: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/DeleteFamilyMedicalHistory', familyMedicalHisID);
  }

  getPatientSurgeryHistory(patientID: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/GetSurgeryHistory_ByPatientID', patientID);
  }

  addPatientSurgeryHistory(payload: SurgeryHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/AddSurgeryHistory', payload);
  }

  updatePatientSurgeryHistory(payload: SurgeryHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/UpdateSurgeryHistory', payload);
  }

  deletePatientSurgeryHistory(surgeryHisID: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/DeleteSurgeryHistory', surgeryHisID);
  }

  getGetObstetricHistory(patientId: number) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/GetObstetricHistory_ByPatientID', patientId)
  }

  addObstetricHistory(payload: ObstetricHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/AddObstetricHistory', payload);
  }

  updateObstetricHistory(payload: ObstetricHistoryModel) {
    return internalApiService.postAsync('Patient/PatientMedicalHistory/UpdateObstetricHistory', payload);
  }
}

const service = new PatientMedicalHistoryService();

export default service;