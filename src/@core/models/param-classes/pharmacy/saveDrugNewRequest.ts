import { PatientRegistration } from '@core/models/patients/patientRegistration';
import { OutwardDrugInvoice } from '@core/models/pharmacy/outwardDrugInvoice';

export interface SaveDrugNewRequest {
  outwardInvoices: OutwardDrugInvoice[];
  regInfo: PatientRegistration;
  staffID: number;
}
