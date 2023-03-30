export interface SearchSupplierAutoPagingRequest {
  criteria: {
    orderBy?: string;
    supplierName?: string;
    v_SupplierType?: number;
    pharmacyEstimatePoID?: number;
    isMain?: number;
    v_MedProductType?: number;
  };
  pageSize: number;
  pageIndex: number;
  bcount?: boolean;
}