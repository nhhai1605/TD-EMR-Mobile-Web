import { OutPatientCashAdvance } from '@core/models/registrations/outPatientCashAdvance';

export interface PatientTransaction_New {
  transactionID?: number;
  ptRegistrationID?: number;
  transactionTypeID?: number;
  bDID?: number;
  transactionBeginDate?: string;
  transactionEndDate?: string;
  transactionRemarks?: string;
  isAdjusted?: boolean;
  isClosed?: boolean;
  v_TranHIPayment?: number;
  tranHIPaymentStatus?: any;
  v_TranPatientPayment?: number;
  tranPatientPaymentStatus?: any;
  recordState?: any;
  v_RegistrationType?: any;
  patientCashAdvances?: any[];
  patientTransactionDetails?: any[];
}
