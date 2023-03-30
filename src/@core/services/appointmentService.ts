import { DeptLocation } from '@core/models/appointments/deptLocation';
import { PatientAppointment } from '@core/models/appointments/patientAppointment';
import { PagedData } from '@core/models/common/searchCriteria';
import internalApiService from './base/internalApiService';

class appointmentService {
  getAllServicesByAppointmentType(payload) {
    return internalApiService.postAsync(`Appointment/GetAllServicesByAppointmentType`, JSON.stringify(payload));
  }

  getListDoctor_ByDayOfWeek(payload) {
    return internalApiService.postAsync(`Appointment/GetListDoctor_ByDayOfWeek`, payload);
  }

  getAllDeptLocationsByService(payload) : Promise<PagedData<DeptLocation>>  {
    return internalApiService.postAsync(`Appointment/GetAllDeptLocationsByService`, payload);
  }

  saveUpdatePatientAppointment(payload)  {
    return internalApiService.postAsync(`Appointment/PatientAppointments_Save`, payload);
  }
  
  getPatientAppointmentByID(payload)  {
    return internalApiService.postAsync(`Patient/GetAppointmentByID`, payload);
  }

  searchAppointments(payload):Promise<PagedData<PatientAppointment>>  {
    return internalApiService.postAsync(`Appointment/searchAppointments`, payload);
  }

  getAppointmentByID(payload):Promise<PatientAppointment>  {
    return internalApiService.postAsync(`Patient/GetAppointmentByID`, payload);
  }

  getGetPCLItemsByName(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/GetPCLItems_ByName', payload);
  }

  searchAppointmentByPatient(payload) {
    return internalApiService.postAsync('Appointment/GetAppointments', payload);
  }

  getAllDeptLocationsByRoomType(roomTypeId: number) {
    return internalApiService.postAsync('Appointment/GetAllDeptLocationsByRoomType', roomTypeId)
  }

  web_CreateOutPatientCashAdvanceAndUpdateStatus(payload) {
    return internalApiService.postAsync('Appointment/AppointmentWeb/Web_CreateOutPatientCashAdvanceAndUpdateStatus', payload);
  }

  calculateTotalAppt_CashAdvance(appointmentID: number) {
    return internalApiService.postAsync('Appointment/CalculateTotalAppt_CashAdvance', appointmentID);
  }
}

export default new appointmentService();
