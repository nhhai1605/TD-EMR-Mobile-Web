import { DiagnosisIcd10Items } from '../consultation/diagnosisIcd10Items';
import { PatientRegistration } from '../patients/patientRegistration';

export interface SaveEmptyRegistrationRequest {
  staffID?: number;
  collectorDeptLocID?: number;
  apply15HIPercent?: number;
  registrationInfo?: PatientRegistration;
  v_RegistrationType?: number;
  icd10Items?: DiagnosisIcd10Items[];
  isHospitalizationProposal?: boolean;
}
