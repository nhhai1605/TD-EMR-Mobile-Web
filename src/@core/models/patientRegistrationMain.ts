import { Patient } from '@core/models/patients/patient';
import { TicketIssue } from './ticketIssue';
import { PatientClassification } from './patientClassification';
import { V_RegForPatientOfTypeEnum } from './enums/RegForPatientOfType';
import { RegistrationStatusEnum } from './enums/registrationStatus';
import { RecordStateEnum } from './enums/recordState';
import { HealthInsurance } from './patients/healthInsurance';
import { PatientAppointment } from './appointments/patientAppointment';
import { PaperReferal } from './patients/paperReferal';
import { RegistrationTypeEnum } from './enums/registrationType';

export interface PatientRegistration_Main {
  ptRegistrationID: number;
  tranFinalizationID: number;
  regLockFlag: number;
  hIReportID: number;
  nonHIReportID: number;
  reportedDate: string | null;
  reportAppliedCode: string;
  v_ReportStatus: number;
  confirmHIStaffID: number | null;
  patientID: number | null;
  patientClassification: PatientClassification;
  staffID: number | null;
  hIApprovedStaffID: number | null;
  examDate: string;
  patient: Patient;
  bNTKSauXV: boolean | null;
  isHIUnder15Percent: boolean | null;
  appointmentID: number | null;
  appointmentDate: string | null;
  regCancelDate: string;
  regCancelStaffID: number;
  apptNotes: string;
  ticketIssue: TicketIssue;
  isDiffBetweenRegistrationAndTicket: boolean;
  isChildUnder6YearsOld: boolean;
  isAllowCrossRegion: boolean;
  ptInsuranceBenefit: number | null;
  isCrossRegion: boolean | null;
  hisID: number | null;
  fiveYearsAppliedDate: string | null;
  isHICard_FiveYearsCont_NoPaid: boolean;
  v_RegistrationStatus: number;
  isHICard_FiveYearsCont: boolean;
  paperReferalID: number | null;
  isCancelRegistration: boolean;
  ptRegistrationTransferID: number | null;
  inPtRegistrationID: number | null;
  isCalcComplete: boolean;
  oMRResultStringFilePath: string;
  unfinishRegistrationStatus: number;
  orgPtInsuranceBenefit: number | null;
  emergInPtReExamination: boolean | null;
  findPatient: number;
  v_RegistrationType: RegistrationTypeEnum;
  v_RegForPatientOfType: V_RegForPatientOfTypeEnum;
  markedAsDeleted: boolean;
  registrationStatus: RegistrationStatusEnum;
  recordState: RecordStateEnum;
  outPtTreatmentProgramID: number | null;
  isInTreatmentProgram: boolean;
  healthInsurance: HealthInsurance;
  basicDiagTreatment: string;
  appointment: PatientAppointment;
  medServiceNames: string;
  isSelected: boolean;
  isChecked: boolean;
  ptRegistrationCode: string;
  regTypeID: number | null;
  patientClassID: number | null;
  paperReferal: PaperReferal;
}
