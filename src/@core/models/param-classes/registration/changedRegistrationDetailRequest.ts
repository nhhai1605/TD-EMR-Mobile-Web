import { PatientRegistration } from "@core/models/patients/patientRegistration";
import { PatientRegistrationDetail } from "@core/models/registrations/patientRegistrationDetail";

export interface ChangedRegistrationDetailRequest {
  curRegistration: PatientRegistration,
  regDetailList: PatientRegistrationDetail,
  deletedRegDetailList: PatientRegistrationDetail,
  staffID: number
}        