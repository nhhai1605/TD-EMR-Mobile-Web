import { PatientExt } from '@core/models/patients/patientExt';
import { PatientAppointment } from '@core/models/appointments/patientAppointment';
import { PatientRegistration_Main } from '@core/models/registrations/patientRegistrationMain';


export interface GetPatientExt {
    patientExt: PatientExt;
    lastRegistration: PatientRegistration_Main;
    lastHIRegistration: PatientRegistration_Main;
    latestRegistration_InPt: PatientRegistration_Main;
    appointmentList: PatientAppointment[];
}