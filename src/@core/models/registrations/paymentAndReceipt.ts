export interface PaymentAndReceipt {
  paymentID?: number;
  serviceID?: number;
  serviceItemType?: number;
  v_TradingPlaces?: number;
  isBalance?: number;
  amount?: number;
  isPrintReceiptForPT?: boolean;
  isPrintReceiptForHI?: boolean;
  outPtCashAdvanceID?: number;
  discountAmount?: number;
  serviceDetailsID?: number[];
  healthInsuranceRebate?: number;
}
