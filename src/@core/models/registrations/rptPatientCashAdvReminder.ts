import { RegistrationTypeEnum } from '../enums/registrationType';

export interface RptPatientCashAdvReminder {
  rptPtCashAdvRemID: number;
  ptRegistrationID: number;
  remCode: string;
  recCreatedDate: string;
  remDate: string;
  staffID: number;
  remNote: string;
  v_CashAdvanceType: number;
  v_PaymentReason: number;
  v_RegistrationType: RegistrationTypeEnum;
  remAmount: number;
  checked: boolean;
  canNew: boolean;
  canUpdate: boolean;
  v_RefundPaymentReasonInPt: number;
}
