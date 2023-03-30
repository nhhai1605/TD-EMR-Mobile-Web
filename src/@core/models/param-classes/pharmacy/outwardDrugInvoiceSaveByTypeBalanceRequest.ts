import { OutwardDrugInvoice } from "@core/models/pharmacy/outwardDrugInvoice";

export interface OutwardDrugInvoice_SaveByType_BalanceRequest {
  invoice: OutwardDrugInvoice;
  viewCase: number;
}
