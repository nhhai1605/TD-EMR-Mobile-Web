import { PatientApptServiceDetails } from '@core/models/appointments/patientApptServiceDetails';
import { Prescription } from '@core/models/consultation/prescription';
import { SmallProcedure } from '@core/models/registrations/smallProcedure';
import { DiagnosisTreatment } from '@core/models/consultation/diagnosisTreatment';
import { DiagnosisIcd10Items } from '@core/models/consultation/diagnosisIcd10Items';
import { GeneralExamination } from '@core/models/patients/generalExamination';

export interface SaveAndUpdateDiagPreRequest {
  isUpdateWithoutChangeDoctorIDAndDatetime?: boolean;
  aDiagnosisTreatment: DiagnosisTreatment;
  diagnosisIcd10ListID: number;
  aDiagnosisIcd10Items: DiagnosisIcd10Items[];
  numberTypePrescriptions_Rule?: number;
  aPrescription: Prescription;
  aPrescription_Old: Prescription;
  allowUpdateThoughReturnDrugNotEnough?: boolean;
  isCreateNewForOutTreatment: boolean;
  updatedSmallProcedure?: SmallProcedure;
  staffID: number;
  ptRegistrationID: number;
  objGenExam?: GeneralExamination;
  objApptServiceDetail?: PatientApptServiceDetails;
}

