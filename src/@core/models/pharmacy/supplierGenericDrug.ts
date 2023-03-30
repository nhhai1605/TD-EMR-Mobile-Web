import { SupplierGenericDrug } from "./drugDeptSupplier";

export interface SupplierGenericDrug_LoadSupplierIDRequest {
  supplierID: number;
  pageSize: number;
  pageIndex: number;
  bcount?: boolean;
}

export interface UpdateSupplierPriceRequest{
  listSupplierProduct: SupplierGenericDrug[];
  staffID: number;
  priceChangeType: number;
}