import { PagedData } from '@core/models/common/searchCriteria';
import { RiskFactors } from '@core/models/riskFactors';
import internalApiService from './base/internalApiService';
import {PatientSearchCriteria} from "../models/patients/patientSearchCriteria";
import { DeptLocation } from '@core/models/appointments/deptLocation';

class PatientService {
  getPatientInfo(id) {
    return internalApiService.postAsync('Patient/GetPatientByID', id);
  }

  getPatientExtInfo(id) {
    return internalApiService.postAsync('Patient/GetPatientExtByID', id);
  }

  addPatient(payload) {
    return internalApiService.postAsync('Patient/AddNewPatient', payload);
  }

  updatePatient(payload) {
    return internalApiService.postAsync('Patient/UpdatePatient', payload);
  }
  
  getPatientRegistrationQueue(payload) {
    return internalApiService.postAsync('Patient/SearchRegistrationListForOST', payload);
  }

  getLstPhyExamByPtRegID(payload) {
    return internalApiService.postAsync('Patient/GetLstPhyExam_ByPtRegID', payload);
  }

  getPhyExamByPtRegID(payload) {
    return internalApiService.postAsync('Patient/GetPhyExam_ByPtRegID', payload, false);
  }

  addPhysicalExamination(payload) {
    return internalApiService.postAsync('Patient/AddNewPhysicalExamination', payload);
  }

  updatePhysicalExamination(payload) {
    return internalApiService.postAsync('Patient/UpdatePhysicalExamination', payload);
  }

  getLocaltion(payload) {
    return internalApiService.postAsync('Patient/getAllLocations', payload);
  }

  getRiskFactors(patientID): Promise<PagedData<RiskFactors>> {
    return internalApiService.postAsync('Patient/RiskFactorGet', patientID);
  }

  addRiskFactor(payload) {
    return internalApiService.postAsync('Patient/RiskFactorInsert', payload);
  }

  updateRiskFactor(payload) {
    return internalApiService.postAsync('Patient/UpdateRiskFactor', payload);
  }
  
  searchPatients(payload: PatientSearchCriteria ) {
    return internalApiService.postAsync('Patient/SearchPatients', payload);
  }

  getAllStaffs() {
    return internalApiService.postAsync(`Patient/GetAllStaff`, JSON.stringify(0));
  }
  
  getAllStaffs_FromStaffID(payload: number) {
    return internalApiService.postAsync(`Patient/GetAllStaffs_FromStaffID`, payload);
  }

  GetStaffsByName(payload) {
    return internalApiService.postAsync(`Patient/GetStaffs_ByName`, payload);
  }

  getPtFamilyRelationship(payload: number){
    return internalApiService.postAsync(`Patient/GetPtFamilyRelationship`, payload);
  }

  searchRegisDetailPrescription(payload) {
    return internalApiService.postAsync('Patient/SearchRegisDetailPrescription', payload);
  }
  
  deletePatient(payload){
    return internalApiService.postAsync(`Patient/DeletePatient`, payload);
  }

  getAllDepartments(){
    return internalApiService.postAsync(`Patient/GetAllDepartmentsByV_DeptTypeOperation`, JSON.stringify(0));
  }

  getAllDeptLocationByDeptID(payload): Promise<PagedData<DeptLocation>> {
    return internalApiService.postAsync('Patient/GetDeptLocIDsByDeptID', payload);
  }

  updatePatientBloodTypeID(payload) {
    return internalApiService.postAsync('Patient/UpdatePatientBloodTypeID', payload);
  }
  
  getPhyExams(payload) {
    return internalApiService.postAsync('Patient/GetPhyExam_ByPatientID', payload);
  }
 
}

export default new PatientService();
