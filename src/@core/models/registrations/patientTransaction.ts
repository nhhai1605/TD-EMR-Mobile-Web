import { RecordStateEnum } from '@core/models/enums/recordState';
import { OutPatientCashAdvance } from '@core/models/registrations/outPatientCashAdvance';
import { RegistrationTypeEnum } from '../enums/registrationType';
import { PatientTransactionDetail } from './patientTransactionDetail';

export interface PatientTransaction {
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
  patientTransactionPayments?: any[];
  recordState?: RecordStateEnum;
  v_RegistrationType?: RegistrationTypeEnum;
  patientCashAdvances?: OutPatientCashAdvance[];
  //patientRegistration?: PatientRegistration;
  patientTransactionDetails?: PatientTransactionDetail[];
}
