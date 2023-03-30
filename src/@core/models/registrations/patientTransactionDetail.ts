export interface PatientTransactionDetail {
  transItemID?: number;
  outwBloodInvoiceID?: number;
  outDMedRscrID?: number;
  staffID?: number;
  ptRegDetailID?: number;
  outiID?: number;
  transactionID?: number;
  transactionDate?: string;
  amount?: number;
  fullName?: string;
  transactionType?: string;
  priceDifference?: number;
  amountCoPay?: number;
  healthInsuranceRebate?: number;
  discount?: number;
  qty?: number;
  refDocID?: number;
  exchangeRate?: number;
  transItemRemarks?: string;
  pCLRequestID?: number;
  tranRefID?: number;
  isPaided?: boolean;
  patientPayment?: number;
  discountAmt?: number;
  v_TranRefType?: any;
}
