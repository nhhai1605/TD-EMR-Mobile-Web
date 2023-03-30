import { OutwardDrugInvoice } from '@core/models/pharmacy/outwardDrugInvoice';

export interface AddOutWardDrugInvoiceReturnVisitorRequest {
  invoice: OutwardDrugInvoice;
  returnStaffID: number;
}
