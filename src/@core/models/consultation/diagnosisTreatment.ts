import { RegistrationTypeEnum } from '../enums/registrationType';
import { RefDepartment } from '../reference/refDepartment';
import { PatientServiceRecord } from '../registrations/patientServiceRecord';

export interface DiagnosisTreatment {
  dtItemID?: number | null;
  serviceRecID?: number | null;
  ptRegDetailID?: number | null;
  diagnosis?: string | null;
  diagnosisFinal?: string | null;
  orientedTreatment?: string | null;
  doctorComments?: string | null;
  huongDieuTri?: string | null;
  mDRptTemplateID?: number | null;
  doctorStaffID?: number | null;
  objDoctorStaffID?: number;
  deptLocationID?: number | null;
  latestPrescriptID?: number | null;
  prescriptID?: number | null;
  issueID?: number | null;
  treatment?: string | null;
  modifierDoctorNames?: string | null;
  diagnosisDate?: string;
  v_DiagnosisType?: number | null;
  v_TreatmentType?: number | null;
  phyExamID?: number | null;
  patientServiceRecord?: PatientServiceRecord;
  v_RegistrationType?: RegistrationTypeEnum;
  iCD10List?: string | null;
  department?: RefDepartment;
  heartFailureType?: boolean | null;
  treatmentType?: string | null;
  markedDelete?: boolean | null;
  iCD10Code?: string | null;
  medSecretaryID?: number | null;
  versionNumber?: number | null;
  deptIDCreated?: number | null;
}
