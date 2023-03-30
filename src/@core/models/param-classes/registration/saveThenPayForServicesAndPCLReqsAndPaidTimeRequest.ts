import { PatientPCLRequest } from '@core/models/registrations/patientPCLRequest';
import { PatientRegistrationDetail } from '@core/models/registrations/patientRegistrationDetail';
import { PatientRegistration_Main } from '@core/models/registrations/patientRegistrationMain';
import { PatientTransaction } from '@core/models/registrations/patientTransaction';
import { PatientTransactionPayment } from '@core/models/registrations/patientTransactionPayment';
import { PromoDiscountProgram } from '@core/models/registrations/promoDiscountProgram';

export interface SaveThenPayForServicesAndPCLReqsAndPaidTimeRequest {
  dangThucHienBuocNao?: number;
  hamDuocGoiTuDau?: number;
  regInfo_Main?: PatientRegistration_Main;
  staffID?: number;
  paidTime?: string;
  regDetailList?: PatientRegistrationDetail[];
  modifiedregDetailList?: PatientRegistrationDetail[];
  deletedRegDetailList?: PatientRegistrationDetail[];
  pclRequestList?: PatientPCLRequest[];
  modifiedpclRequestList?: PatientPCLRequest[];
  deletedPclRequestList?: PatientPCLRequest[];
  outwardDrugList?: [];
  modifiedoutwardDrugList?: [];
  deletedoutwardDrugList?: [];
  paymentDetails?: PatientTransactionPayment;
  promoDiscountProgramObj?: PromoDiscountProgram;
  patientTransaction?: PatientTransaction;
  complaint?: string;
  note?: string;
  symptom?: string;
}

