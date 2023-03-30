import { OutwardDrugInvoice } from '@core/models/pharmacy/outwardDrugInvoice';

export interface CancelOutwardDrugInvoiceRequest {
  invoice?: OutwardDrugInvoice;
  staffID?: number;
  collectorDeptLocID?: number;
  apply15HIPercent?: number;
  v_TradingPlaces?: number;
}
