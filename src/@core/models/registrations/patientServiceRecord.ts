// import { DiagnosisTreatment } from '../consultation/diagnosisTreatment';
//import { PrescriptionIssueHistory } from '../consultation/prescriptionIssueHistory';
import { RegistrationTypeEnum } from '../enums/registrationType';
import { GeneralExamination } from '../patients/generalExamination';
import { PatientMedicalRecord } from '../patients/patientMedicalFile';
import { Staff } from '../staff';

export interface PatientServiceRecord {
  serviceRecID?: number;
  dateModified?: string;
  ptRegistrationID?: number;
  ptRegDetailID?: number;
  ptRegistrationCode?: string;
  staffID?: number;
  patientRecID?: number;
  patientMedicalFileID?: number;
  examDate?: string;
  v_ProcessingType?: number;
  v_Behaving?: number;
  v_DiagnosisType?: number;
  diagnosisTreatments?: any[];
  patientMedicalRecord?: PatientMedicalRecord;
  staff?: Staff;
  //prescriptionIssueHistories?: PrescriptionIssueHistory[];
  v_RegistrationType?: RegistrationTypeEnum;
  isUpdateSmallProcedureOnly?: boolean;
  generalExaminationObj?: GeneralExamination;
}
