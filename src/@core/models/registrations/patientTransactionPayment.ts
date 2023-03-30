import { PatientTransaction } from './patientTransaction';

export interface PatientTransactionPayment {
  ptTranPaymtID?: number;
  recCreatedDate?: string;
  ptPmtAccID?: number;
  transItemID?: number;
  invoiceID?: string;
  transactionID?: number;
  intRcptTypeID?: number;
  tranFinalizationID?: number;
  paymentDate?: string;
  payAmount?: number;
  payAdvance?: number;
  hIAmount?: number;
  totalSupport?: number;
  receiptNumber?: string;
  manualReceiptNumber?: string;
  v_Currency?: number;
  v_PaymentMode?: number;
  paymentMode?: {
    lookID: number;
  };
  v_PaymentType?: number;
  creditOrDebit?: number;
  staffID?: number;
  collectorDeptLocID?: number;
  deletedStaffID?: number;
  deletedStaffName?: string;
  tranPaymtNote?: string;
  tranPaymtStatus?: number;
  isDeleted?: boolean;
  reported?: boolean;
  hiDelegation?: boolean;
  v_TradingPlaces?: number;
  v_RefundPaymentReasonInPt?: number;
  outPtCashAdvanceID?: number;
  patientTransaction?: PatientTransaction;
}
