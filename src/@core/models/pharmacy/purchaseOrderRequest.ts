import { RequestSearchCriteria } from "../param-classes/estimate/requestSearchCriteria";

export interface PharmacyPurchaseOrders_Search {
  criteria: RequestSearchCriteria,
  pageIndex: number,
  pageSize: number,
  bCount: boolean
}

export interface PharmacyPurchaseOrderDetail_ByParentIDRequest {
  id: number,
  isInput: number // Nhap hang 1 or Dat hang 0
}

export interface GetDrugForAutoCompleteForPurchaseOrderRequest {
  brandName: string,
  pharmacyEstimatePoID: number,
  supplierID: number,
  pageIndex: number,
  pageSize: number,
  isCode: boolean
}

export interface RefGenericDrugDetail_WarningOrderRequest {
  supplierID: number,
  pageIndex: number,
  pageSize: number,
  isAll: boolean
}

export interface PharmacyPurchaseOrderDetails_CheckOrderRequest {
  drugID: number,
  fromDate: Date,
  toDate: Date
}

export interface PharmacyPurchaseOrderDetail_GetFromEstimateRequest {
  pharmacyEstimatePoID: number,
  supplierID: number
}