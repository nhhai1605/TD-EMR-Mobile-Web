import { OutwardDrug } from '@core/models/pharmacy/outWardDrug';
import { OutwardDrugInvoice } from '@core/models/pharmacy/outwardDrugInvoice';

export interface AddOutwardDrugReturnRequest {
  invoice?: OutwardDrugInvoice;
  outwardDrugs?: OutwardDrug[];
  staffID?: number;
  apply15HIPercent?: number;
}
