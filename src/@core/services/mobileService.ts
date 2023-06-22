import internalApiService from './base/internalApiService';
import identityServerService from './base/identityServerService';
import {getFormUrlEncoded, HTTP_CONTENT_TYPE} from "../utils/httpHelper";

class MobileService {
    register(payload){
        return identityServerService.postAsync('user/Register', payload); // Done
    }

    login(payload){
        return identityServerService.postAsync('connect/token', getFormUrlEncoded(payload), true, HTTP_CONTENT_TYPE.FORM_URLENCODED); // Done
    }

    getUserInfo(){
        return identityServerService.getAsync('connect/userinfo', null,true, HTTP_CONTENT_TYPE.FORM_URLENCODED); // Done
    }

    resetPassword(patientCellPhoneNumber:string){
        return identityServerService.postAsync('user/ResetPassword', patientCellPhoneNumber); // Done
    }

    checkResetPassword(patientCellPhoneNumber:string){
        return identityServerService.postAsync('user/CheckResetPassword', patientCellPhoneNumber); // Done
    }
    

    UpdateProfileInfo(payload) {
        return identityServerService.postAsync('user/UpdateProfileInfo', payload); // Done
    }

    updateWebUserPassword(payload) {
        return identityServerService.postAsync('user/UpdateWebUserPassword', payload); // Done
    }

    addFacilityToAccount(payload) {
        return identityServerService.postAsync('user/AddAccountToFacility', payload); // Done
    }

    getFacilityDetail(pkhidString : string) {
        return identityServerService.postAsync('user/GetFacilityDetails/' + pkhidString); // Done
    }
    getFacilityDetailByCode(facilityCode : string) {
        return identityServerService.postAsync('user/GetFacilityByCode/' , facilityCode); // Done
    }

    updateUserNotificationToken(payload) {
        return identityServerService.postAsync('user/Web_UpdateWebUserAccountNotiToken', payload); // Done
    }

    getManagePatientList(payload: number){
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_LoadManagePatient', payload); // Done
    }

    addPatient(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_CreateNewPatient', payload); // Done
    }

    updatePatient(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_UpdatePatient', payload); // Done
    }

    getPatientInfo(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_LoadExistingPatient', payload); // Done
    }

    addManagePatient(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_AddManagePatient', payload); // Done
    }

    removeManagePatient(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_RemoveManagePatient', payload); // Done
    }

    getMedicalServices(payload) {
        // return internalApiService.postAsync('Patient/GetAllMedicalServiceItemsByType', payload); // Done
        return internalApiService.postAsync('Appointment/GetAllServicesByAppointmentType', payload); // Done
    }

    getDoctorsByDate(payload) {
        return internalApiService.postAsync('Appointment/GetListDoctor_ByDayOfWeek', payload);
    }

    getDoctorsByMedServiceID(payload: number) {
        return internalApiService.postAsync('Appointment/GetListDoctor_ByMedServiceID', payload);
    }

    getAllServicesByDoctorStaffID(payload: number) {
        return internalApiService.postAsync('Appointment/getAllServicesByDoctorStaffID', payload);
    }

    getAllDoctors() {
        return internalApiService.postAsync('Appointment/GetAllSchedule', 0);
    }

    getAllPatientRegistration(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_GetAllPatientRegistration', payload); // Done
    }

    getAllPatientPCLRequest(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_GetAllPatientPCLRequest', payload); // Done
    }

    getAllPatientAppointment(patientCode:string) {
        console.log(patientCode)
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_GetAllPatientAppointment', patientCode); // Done
    }

    getAllAccountAppointment(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_GetAppointmentHistory_ByUserID', payload); // Done
    }

    getDoctorAppointments(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_GetAppointmentByReqDoctorStaffIDAndDate', payload);
    }

    getDoctorSchedule(payload) {
        return internalApiService.postAsync('Appointment/GetScheduleDoctor_ByStaffAndDate', payload);
    }

    saveAppointment(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_SaveAppointmentByReqDoctorStaffIDAndDate', payload);
    }

    // getMedicalServicesByDoctor(payload) {
    // 	return internalApiService.postAsync('Appointment/AppointmentWeb/getMedicalServicesByDoctor', payload);
    // }

    getAppointmentDetail(payload:number) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_GetDetailPatientAppointment', payload);
    }

    getMedicalRecords(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_MedicalRecords', payload);
    }

    getPCLDetail(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_GetDetailPatientPCLRequestDetail', payload);
    }

    createInstantCode(payload) {
        return internalApiService.postAsync('External/CreateInstantCode' , payload ); // Missing
    }

    getPtFamilyRelationship(payload: number){
        return internalApiService.postAsync('Patient/GetPtFamilyRelationship', payload); // Done
    }

    getOnePayReturnURL() {
        return import.meta.env.VITE_API_ENDPOINT + "Appointment/AppointmentWeb/Web_ResponseFromOnePayAndSaveHistory";
    }

    getPayooReturnURL() {
        return import.meta.env.VITE_API_ENDPOINT + "Appointment/AppointmentWeb/Web_ResponseFromPayooAndSaveHistory";
    }

    updateAppointmentStatus(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_UpdateAppointmentStatus', payload);
    }

    getPayooXMLAndChecksum(payload) {
        return internalApiService.postAsync('Appointment/AppointmentWeb/Web_GetPayooXMLAndCheckSum', payload);
    }

    createNewTicket(payload)
    {
        return internalApiService.postAsync('QMS/App_CreateNewTicket', payload);
    }
    getCurrentTicket(payload)
    {
        return internalApiService.postAsync('QMS/App_GetCurrentTicket', payload);
    }
    cancelTicket(payload: number)
    {
        return internalApiService.postAsync('QMS/App_CancelTicket', payload);
    }
    getListTicket(payload)
    {
        return internalApiService.postAsync('QMS/App_GetListTicketByWebAccountUserID', payload);
    }
}
export default new MobileService()