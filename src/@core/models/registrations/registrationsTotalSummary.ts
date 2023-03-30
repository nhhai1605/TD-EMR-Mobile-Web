import { RegistrationTypeEnum } from '../enums/registrationType';

export interface RegistrationsTotalSummary {
  totalPatientPaid?: number;
  totalRefund?: number;
  totalReceivedFromPatient?: number;
  totalHI?: number;
}

export interface RegistrationSummaryInfo {
  registrationID?: number;
  registrationCode?: string;
  examDate?: string;
  staffID?: number;
  staffName?: string;
  patientID?: number;
  patientName?: string;
  patientCode?: string;
  transactionID?: number;
  totalPatientPaid?: number;
  totalRefund?: number;
  totalHI?: number;
  totalReceivePatient?: number;
  totalReceivedFromPatient?: number;
  v_RegistrationType?: RegistrationTypeEnum;
}

export interface RegistrationType {
  regTypeID?: number;
  regTypeName?: string;
}
