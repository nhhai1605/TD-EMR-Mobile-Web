import internalApiService from './base/internalApiService';

class CreateContractHealthCheck {
  getHospitalClientContracts(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/GetHospitalClientContracts', payload);
  }

  editHospitalClient(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/EditHospitalClient', payload);
  }

  getHosClientContractPatientGroups(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/GetHosClientContractPatientGroup_ByHosClientID', payload);
  }

  getHospitalClients() {
    return internalApiService.postAsync('Appointment/HospitalClient/GetHospitalClients');
  }

  getHospitalClientContractDetails(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/GetHospitalClientContractDetails', payload);
  }

  editHospitalClientContract(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/EditHospitalClientContract', payload);
  }

  addNewListPatient(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/AddNewListPatient', payload);
  }

  saveHosClientContractPatientGroup(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/SaveHosClientContractPatientGroup', payload);
  }

  getHosClientContract(hosClientId: number) {
    return internalApiService.postAsync('Appointment/HospitalClient/GetContractByHosClient', hosClientId);
  }

  addMedicalExaminationService(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/AddUpdateMedicalExaminationService', payload);
  }

  getMedicalExaminationServiceByGroupID(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/GetMedicalExaminationService_ByGroupID', payload);
  }

  searchRegistrationsForMedicalExaminationDiag(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/SearchRegistrationsForMedicalExaminationDiag', payload);
  }

  getMedicalExaminationResultByPtRegistrationID(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/GetMedicalExaminationResultByPtRegistrationID', payload);
  }

  updateMedicalExaminationResult(payload) {
    return internalApiService.postAsync('Appointment/HospitalClient/UpdateMedicalExaminationResult', payload);
  }
}

export default new CreateContractHealthCheck();
