import { OutwardDrugInvoice } from "./outwardDrugInvoice"

export interface SearchReturnDrugInvoiceRequest {
  pageIndex?: number,
  pageSize?: number,
  customerName?: string,
  outInvID?: string,
  patientCode?: string,
  hICardCode?: string,
  fromDate?: Date,
  toDate?: Date,
  isNotSolve?: boolean,
  bCountTotal?: boolean,
  orderBy?: string
}

export interface AddReturnDrugInvoiceRequest {
  invoice: OutwardDrugInvoice,
  returnStaffID: number
}