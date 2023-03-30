export interface ReportOutPatientCashReceipt {
  reportOutPatientCashReceiptID?: number;
  paymentID?: number;
  itemID?: number;
  patientID?: number;
  serviceItemType?: number;
  serviceName?: string;
  fullName?: string;
  staffName?: string;
  ptRegistrationID?: number;
  amount?: number;
  patientAmount?: number;
  deptLocID?: number;
  serviceSeqNum?: number;
  serviceSeqNumType?: number;
  serviceSeqNumstring?: string;
  outPtCashAdvanceID?: number;
  hIBenefit?: number;
  pCLType?: number;
  discountAmount?: number;
  hIAmount?: number;
}
