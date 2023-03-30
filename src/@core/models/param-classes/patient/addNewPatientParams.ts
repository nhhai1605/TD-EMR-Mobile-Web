import { PatientExt } from "@core/models/patients/patientExt";

export interface AddNewPatientParams {
    newPatient: PatientExt;
    isCreateNewPatientFromOld: boolean;
}