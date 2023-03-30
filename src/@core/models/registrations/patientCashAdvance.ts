import { RegistrationTypeEnum } from './../enums/registrationType';

export interface PatientCashAdvance {
  ptCashAdvanceID?: number;
  ptRegistrationID?: number;
  cashAdvReceiptNum?: string;
  recCreatedDate?: string;
  paymentDate?: string;
  staffID?: number;
  generalNote?: string;
  v_CashAdvanceType?: number;
  v_PaymentReason?: number;
  v_PaymentMode?: number;
  rptPtCashAdvRemID?: number;
  v_RegistrationType?: RegistrationTypeEnum;
  paymentAmount?: number;
  balanceAmount?: number;
  fullName?: string;
  rptPatientCashAdvReminder?: RptPatientCashAdvReminder;
  inPatientBillingInvID?: number;
  billingInvNum?: string;
  remCode?: string;
}

export interface RptPatientCashAdvReminder {
  rptPtCashAdvRemID?: number;
  ptRegistrationID?: number;
  remCode?: string;
  recCreatedDate?: string;
  remDate?: string;
  staffID?: number;
  remNote?: string;
  v_CashAdvanceType?: number;
  v_PaymentReason?: number;
  v_RegistrationType?: RegistrationTypeEnum;
  remAmount?: number;
  checked?: boolean;
  canNew?: boolean;
  canUpdate?: boolean;
  v_RefundPaymentReasonInPt?: number;
}
