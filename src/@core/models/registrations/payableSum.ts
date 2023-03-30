export interface PayableSum {
  totalQty: number;
  totalInvoicePrice: number;
  totalPrice: number;
  totalHIServicePrice: number;
  totalNonHIServicePrice: number;
  totalPriceDifference: number;
  totalCoPayment: number;
  totalHIPayment: number;
  totalPatientPayment: number;
  totalPatientPaid: number;
  totalPatientRemainingOwed: number;
  totalPaymentForTransaction: number;
  totalAmtRegDetailServices: number;
  totalPaidForRegDetailServices: number;
  totalAmtRegPCLRequests: number;
  totalPaidForRegPCLRequests: number;
  totalAmtOutwardDrugInvoices: number;
  totalPaidForOutwardDrugInvoices: number;
  totalPatientCashAdvance: number;
  totalDiscountAmount: number;
  totalDiscountedAmount: number;
  totalCashAdvanceAmount: number;
}
