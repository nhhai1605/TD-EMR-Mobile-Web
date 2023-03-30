import { PatientRegistration } from '@core/models/patients/patientRegistration';
import { OutwardDrug } from '@core/models/pharmacy/outWardDrug';
import { OutwardDrugInvoice } from '@core/models/pharmacy/outwardDrugInvoice';

export interface CancelOutwardDrugInvoiceWithoutCreateNewInvoiceRequest {
  regInfo?: PatientRegistration;
  invoice?: OutwardDrugInvoice;
  deletedOutwardDrugs?: OutwardDrug[];
  staffID?: number;
  isOnlyUpdateInID?: boolean;
  lstOutwardDrugCancel?: OutwardDrug[];
  v_TradingPlaces?: number;
}
