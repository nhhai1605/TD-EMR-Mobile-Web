import { PatientExt } from "@core/models/patients/patientExt";

export interface UpdatePatientRequest {
    patient: PatientExt;
    isAdmin: boolean;
}