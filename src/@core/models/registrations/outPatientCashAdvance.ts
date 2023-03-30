import { OutPatientCashAdvanceLink } from './outPatientCashAdvanceLink';

export interface OutPatientCashAdvance {
  outPtCashAdvanceID?: number;
  ptRegistrationID?: number;
  cashAdvReceiptNum?: string;
  recCreatedDate?: string;
  paymentDate?: string;
  staffID?: number;
  v_CashAdvanceType?: number;
  paymentAmount?: number;
  balanceAmount?: number;
  generalNote?: string;
  rptPtCashAdvRemID?: number;
  v_PaymentReason?: number;
  v_PaymentMode?: number;
  isDeleted?: boolean;
  recLog?: string;
  ptTranPaymtID?: number;
  outPatientCashAdvanceLinks?: OutPatientCashAdvanceLink[];
}
