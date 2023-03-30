import { InwardDrugInvoice } from "./inwardDrugInvoice";

export interface InwardDrugInvoiceRequest {
  criteria: {
    orderBy?: string;
    fromDate: Date;
    toDate: Date;
    supplierID?: number;
    invoiceNumber?: string;
    inwardID?: string;
  };
  typID?: number;
  pageSize: number;
  pageIndex: number;
}

export interface InwardDrugInvoiceRequest_Insert {
  invoiceDrug: InwardDrugInvoice
  isNotCheckInvalid: boolean
}

export interface InwardDrugRequest_Update {
  invoicedrug: InwardDrugInvoice
  staffID: number
}

export interface SearchRefDrugGenericDetailsRequest {
  isCode: boolean,
  supplierID: number,
  brandName?: string,
  pageIndex: number,
  pageSize: number
}

export interface GetRefShelfDrugLocationAutoCompleteRequest {
  name: string,
  pageIndex: number,
  pageSize: number
}

export interface GetspInwardDrugDetailsByIDRequest {
  inviID: number,
  pageSize: number,
  pageIndex: number,
  bCountTotal: boolean
}