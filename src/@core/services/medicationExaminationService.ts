import { RefGenericRelation } from './../models/pharmacy/refMedContraIndicationTypes';
import { PagedData } from '@core/models/common/searchCriteria';
import { DiagnosisIcd10Items } from '@core/models/consultation/diagnosisIcd10Items';
import { DiagnosisTreatment } from '@core/models/consultation/diagnosisTreatment';
import { Prescription } from '@core/models/consultation/prescription';
import { GetDrugForSellVisitor, PrescriptionDetail } from '@core/models/consultation/prescriptionDetail';
import { GetAllPrescriptionsAndDetails_ByPtRegistrationIDResponse } from '@core/models/param-classes/consultation/getAllPrescriptionsAndDetailsByPtRegistrationIDResponse';
import { GetLatestDiagnosisTreatmentByPtIDRequest } from '@core/models/param-classes/consultation/getLatestDiagnosisTreatmentByPtIDRequest';
import { SaveAndUpdateDiagPreRequest } from '@core/models/param-classes/consultation/saveAndUpdateDiagPreRequest';
import { SearchDrugForPrescription_PagingRequest } from '@core/models/param-classes/consultation/searchDrugForPrescriptionPagingRequest';
import { SearchRefDiseasesRequest } from '@core/models/param-classes/consultation/searchRefDiseasesRequest';
import { GetRegistrationRequest } from '@core/models/param-classes/registration/getRegistrationRequest';
import { IPatientDashboard } from '@core/models/patients/patientDashboard';
import { PatientRegistration } from '@core/models/patients/patientRegistration';
import { DrugAndConTra } from '@core/models/pharmacy/drugAndConTra';
import { PatientServiceRecord } from '@core/models/registrations/patientServiceRecord';
import { DiseasesReference } from '@core/models/registrations/smallProcedure';
import { getCurrentLang } from '@core/utils/i18n';
import { BehaviorSubject } from 'rxjs';
import internalApiService from './base/internalApiService';
import { GetPrescriptionByPtIDPagingRequest } from '@core/models/param-classes/consultation/getPrescriptionByPtIDPagingRequest';
import { GetPrescriptionByPtIDPagingRespond } from '@core/models/param-classes/consultation/getPrescriptionByPtIDPagingRespond';
import { GetListDrugPatientUsedRequest } from '@core/models/param-classes/consultation/getListDrugPatientUsedRequest';
import { GetRefTreatmentRegimensAndDetailRequest } from '@core/models/param-classes/consultation/getRefTreatmentRegimensAndDetailRequest';
import { GetPatientRegistrationDetailByRoomRequest } from '@core/models/param-classes/consultation/getPatientRegistrationDetailByRoomRequest';

class MedicationExaminationService {
  private patientSubject$ = new BehaviorSubject<IPatientDashboard>({} as IPatientDashboard);

  getPatientMockData() {
    return this.patientSubject$.value;
  }

  saveExamination(entity: IPatientDashboard) {
    this.patientSubject$.next(entity);
  }

  getDrugName(payload: SearchDrugForPrescription_PagingRequest): Promise<PagedData<GetDrugForSellVisitor>> {
    return internalApiService.postAsync('Consultation/Prescription/SearchDrugForPrescription_Paging', payload, false);
  }

  //searchKey, type
  getICD10(payload: SearchRefDiseasesRequest): Promise<PagedData<DiseasesReference>> {
    let url = 'SearchRefDiseases';
    if (getCurrentLang() == 'en') {
      url = 'SearchRefDiseases_English';
    }
    return internalApiService.postAsync(`Consultation/Diagnosis/${url}`, payload, false);
  }

  getPatientPCLRequest(payload) {
    return internalApiService.postAsync(`Consultation/PatientPCLRequestDetail_ByPtRegistrationID`, payload);
  }

  getGetDoctorDashboard(payload) {
    return internalApiService.postAsync(`Patient/DoctorDashboard/GetDoctorDashboard`, payload);
  }

  saveAndUpdateDiagPre(payload: SaveAndUpdateDiagPreRequest) {
    return internalApiService.postAsync('Consultation/Diagnosis/SaveAndUpdateDiagPre', payload);
  }

  getPatientRegistration(payload: GetRegistrationRequest): Promise<PatientRegistration> {
    return internalApiService.postAsync(`Patient/GetRegistration`, payload);
  }

  getTreatmentHistoriesDashboardByPatientID(patientId, take = 15) {
    const payload = {
      patientId,
      Records: take,
    };
    return internalApiService.postAsync('Consultation/Diagnosis/GetTreatmentHistoriesDashboardByPatientID', payload);
  }

  getAllergyByPatientId(payload) {
    return internalApiService.postAsync('Patient/MDAllergies_ByPatientID', payload);
  }

  saveAllergies(payload) {
    return internalApiService.postAsync('Patient/AllergiesAndWarnings_SaveAndUpdate', payload);
  }

  getWarningByPatientId(payload) {
    return internalApiService.postAsync('Patient/MDWarnings_ByPatientID', payload);
  }

  getIcd10ItemsByDTItemID(dtItemID): Promise<PagedData<DiagnosisIcd10Items>> {
    return internalApiService.postAsync('Consultation/Diagnosis/GetDiagnosisIcd10Items_LoadByDTItemID', dtItemID);
  }

  getLatestDiagnosisTreatmentByPtID(payload: GetLatestDiagnosisTreatmentByPtIDRequest): Promise<DiagnosisTreatment> {
    return internalApiService.postAsync('Consultation/Diagnosis/GetLatestDiagnosisTreatmentByPtID', payload);
  }

  getAllPrescriptionsAndDetails_ByPtRegistrationID(
    ptRegistrationID
  ): Promise<GetAllPrescriptionsAndDetails_ByPtRegistrationIDResponse> {
    return internalApiService.postAsync(
      'Consultation/Prescription/GetAllPrescriptionsAndDetails_ByPtRegistrationID',
      ptRegistrationID
    );
  }

  getPatientServiceRecordsGetForMedicExam(payload: PatientServiceRecord): Promise<PagedData<PatientServiceRecord>> {
    return internalApiService.postAsync('Consultation/Diagnosis/PatientServiceRecordsGetForKhamBenh', payload);
  }

  getLatestPrescriptionByPtID(patientID): Promise<Prescription> {
    return internalApiService.postAsync('Consultation/Prescription/GetLatestPrescriptionByPtID', patientID);
  }

  getAllDrugsContrainIndicator(): Promise<PagedData<DrugAndConTra>> {
    return internalApiService.postAsync('Pharmacy/DrugService/GetAllDrugsContrainIndicator');
  }

  getAllRefGenericRelation(): Promise<RefGenericRelation[]> {
    return internalApiService.postAsync('Pharmacy/DrugService/GetAllRefGenericRelation');
  }

  getRemainingPrescriptionDetailsByPrescriptionDetail(payload: PrescriptionDetail[]): Promise<PagedData<PrescriptionDetail>> {
    return internalApiService.postAsync('Consultation/Prescription/GetRemainingPrescriptionDetailsByPrescriptionDetail', payload);
  }

  getDiagnosisAndPrescriptionPrevious(payload) {
    return internalApiService.postAsync('Consultation/Diagnosis/DiagnosisAndPrescription_CreateNewFromOld', payload);
  }

  getDiagnosisTreatmentByDTItemID(id): Promise<DiagnosisTreatment> {
    return internalApiService.postAsync('Consultation/Diagnosis/GetDiagnosisTreatmentByDTItemID', id);
  }

  getPrescriptionByID(id): Promise<PagedData<Prescription>> {
    return internalApiService.postAsync('Consultation/Prescription/GetPrescriptionByID', id);
  }

  getPrescriptionDetailsByPrecriptionID(id): Promise<PagedData<PrescriptionDetail>> {
    return internalApiService.postAsync('Consultation/Prescription/GetPrescriptionDetails_ByPrecriptionID', id);
  }

  getAllPrescriptionReleaseByPtID(
    payload: GetPrescriptionByPtIDPagingRequest
  ): Promise<PagedData<GetPrescriptionByPtIDPagingRespond>> {
    return internalApiService.postAsync('Consultation/Prescription/GetPrescriptionByPtID_Paging', payload);
  }

  getPrescriptDetailsXMLFromPrescriptID(id): Promise<PagedData<PrescriptionDetail>> {
    return internalApiService.postAsync('Consultation/Prescription/GetPrescriptDetailsStr_FromPrescriptID', id);
  }

  getListDrugPatientUsed(payload: GetListDrugPatientUsedRequest) {
    return internalApiService.postAsync('Consultation/Prescription/GetListDrugPatientUsed', payload);
  }

  getAllPrescriptionInOneDay(patientID) {
    return internalApiService.postAsync('Consultation/Prescription/Prescriptions_TrongNgay_ByPatientID', patientID);
  }

  getRefTreatmentRegimensAndDetail(payload: GetRefTreatmentRegimensAndDetailRequest) {
    return internalApiService.postAsync('Consultation/Prescription/GetRefTreatmentRegimensAndDetail', payload);
  }

  saveMedicalRecordTemplate(payload) {
    return internalApiService.postAsync('Consultation/Diagnosis/SaveHTMLTemplate_BenhAnNgoaiTru', payload);
  }

  getPatientRegistrationDetailsByRoom(payload: GetPatientRegistrationDetailByRoomRequest) {
    return internalApiService.postAsync('Patient/GetPatientRegistrationDetailsByRoom', payload);
  }

  getAllDoctorAdviceTemplate() {
    return internalApiService.postAsync('Consultation/Prescription/PrescriptionNoteTemplates_GetAll');
  }

  getRemainingByDrugID(payload): Promise<number> {
    return internalApiService.postAsync('Consultation/Prescription/GetRemainingByDrugID', payload);
  }

  calcAllPrescriptions(payload) {
    return internalApiService.postAsync('Consultation/Prescription/CalcAllPrescriptions', payload);
  }

  calcPrescriptions(payload) {
    return internalApiService.postAsync('Consultation/Prescription/CalcPrescriptions', payload);
  }

  getPrescriptionDetailAndICDInDay(payload) {
    return internalApiService.postAsync('Consultation/Other/GetPrescriptionDetailAndICD_InDay', payload);
  }

  updatePrimaryPrescription(payload) {
    return internalApiService.postAsync('Consultation/Prescription/UpdatePrimaryPrescription', payload);
  }
}

export default new MedicationExaminationService();
