import { DeptLocation } from '@core/models/appointments/deptLocation';
import { RefMedicalServiceItem, RefMedicalServiceType } from '@core/models/appointments/patientApptServiceDetails';
import { PagedData } from '@core/models/common/searchCriteria';
import { SaveThenPayForServicesAndPCLReqsAndPaidTimeRequest } from '@core/models/param-classes/registration/saveThenPayForServicesAndPCLReqsAndPaidTimeRequest';
import { GetAllMedicalServiceItemsByTypeRequest } from '@core/models/param-classes/service-and-PCL/getAllMedicalServiceItemsByTypeRequest';
import { RefDepartment } from '@core/models/refDepartment';
import internalApiService from './base/internalApiService';
import {PatientQueue_GetListPagingRequest} from "../models/param-classes/patient/patientQueueRequest";
import { CalculateHiBenefit } from '@core/models/param-classes/patient/calculateHiBenefitRequest';
import { ApplyHiToInPatientRegistrationRequest } from '@core/models/param-classes/registration/applyHiToInPatientRegistrationRequest';
import { RemoveHiFromOutPatientRegistrationRequest } from '@core/models/param-classes/patient/removeHiFromOutPatientRegistrationRequest';
import { ChangedRegistrationDetailRequest } from '@core/models/param-classes/registration/changedRegistrationDetailRequest';

class PatientRegistrationService {
  getAllMedicalServiceTypes(medServiceID): Promise<PagedData<RefMedicalServiceType>> {
    return internalApiService.postAsync('Patient/GetAllMedicalServiceTypes', medServiceID);
  }

  getAllDeptLocForServicesByInOutType(): Promise<PagedData<DeptLocation>> {
    return internalApiService.postAsync('Patient/GetAllDeptLocForServicesByInOutType', null);
  }

  getMedicalServiceTypesByInOutType(): Promise<PagedData<RefMedicalServiceType>> {
    return internalApiService.postAsync('Patient/GetMedicalServiceTypesByInOutType', [30000, 30002]);
  }

  saveThenPayForServicesAndPCLReqsAndPaidTime(payload: SaveThenPayForServicesAndPCLReqsAndPaidTimeRequest) {
    return internalApiService.postAsync('Patient/SaveThenPayForServicesAndPCLReqsAndPaidTime', payload);
  }

  saveThenPayForServicesAndPCLReqsAndPaidTimeV2(payload: SaveThenPayForServicesAndPCLReqsAndPaidTimeRequest) {
    return internalApiService.postAsync('Patient/SaveThenPayForServicesAndPCLReqsAndPaidTime_V2', payload);
  }
  
  cancelRegistration(payload) {
    return internalApiService.postAsync('Patient/CancelRegistration', payload);
  }

  getAllMedicalServiceItemsByType(payload: GetAllMedicalServiceItemsByTypeRequest): Promise<PagedData<RefMedicalServiceItem>> {
    return internalApiService.postAsync('Patient/GetAllMedicalServiceItemsByType', payload);
  }

  getLocationsByServiceID(medServiceID): Promise<PagedData<DeptLocation>> {
    return internalApiService.postAsync('Patient/GetLocationsByServiceID', medServiceID);
  }

  getPCLItemsByPCLFormID(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLItems_ByPCLFormID', payload);
  }

  getPCLForms(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLForms_GetList_Paging', payload);
  }

  getPCLExamTypeComboSearch(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypeCombo_Search', payload);
  }

  getRegistration(payload) {
    return internalApiService.postAsync('Patient/GetRegistrationTxd', payload);
  }

  getAllRegistrations(payload) {
    return internalApiService.postAsync('Patient/GetAllRegistrations', payload);
  }

  getSearchRegistrationsForDiag(payload) {
    return internalApiService.postAsync('Patient/SearchRegistrationsForDiag', payload);
  }

  getSearchRegistrations(payload) {
    return internalApiService.postAsync('Patient/SearchRegistrations', payload);
  }

  getSearchAppointments(payload) {
    return internalApiService.postAsync('Appointment/SearchAppointments', payload);
  }

  getPCLRequestAndRegDetailForAppointments(payload) {
    return internalApiService.postAsync('Appointment/GetApptDetails_ForNewRegis', payload);
  }

  getAllDepartments(payload): Promise<PagedData<RefDepartment>> {
    return internalApiService.postAsync('Patient/GetAllDepartments', payload);
  }

  getAllDeptLocationByDeptID(payload): Promise<PagedData<DeptLocation>> {
    return internalApiService.postAsync('Patient/GetDeptLocIDsByDeptID', payload);
  }
  
  calculateRegistrationAfterConfirmHI(payload) {
    return internalApiService.postAsync('Patient/CalculateRegistrationAfterConfirmHI', payload);
  }

  calculateHiBenefit(payload : CalculateHiBenefit) {
    return internalApiService.postAsync('Patient/HealthInsurance/CalculateHiBenefit', payload);
  }
  
  getPatientQueue_GetListPaging(payload: PatientQueue_GetListPagingRequest){
    return internalApiService.postAsync('Patient/PatientQueue_GetListPaging', payload);
  }
  
  getRefMedicalServiceGroups(payload: string){
    return internalApiService.postAsync('Configuration/RefMedicalServiceGroup/GetRefMedicalServiceGroups', payload);
  }
  
  getRefMedicalServiceGroupItemsByID(payload: number){
    return internalApiService.postAsync('Configuration/RefMedicalServiceGroup/GetRefMedicalServiceGroupItemsByID', payload);
  }

  applyHiToInPatientRegistration(payload: ApplyHiToInPatientRegistrationRequest){
    return internalApiService.postAsync('Patient/ApplyHiToInPatientRegistration', payload);
  }

  removeHiFromOutPatientRegistration(payload: RemoveHiFromOutPatientRegistrationRequest){
    return internalApiService.postAsync('Patient/HealthInsurance/RemoveHiFromOutPatientRegistration', payload);
  }

  changedRegistrationDetail(payload: ChangedRegistrationDetailRequest){
    return internalApiService.postAsync('Patient/ChangedRegistrationDetail', payload);
  }
}
export default new PatientRegistrationService();
