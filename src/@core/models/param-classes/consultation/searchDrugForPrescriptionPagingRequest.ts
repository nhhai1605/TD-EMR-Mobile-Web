export interface SearchDrugForPrescription_PagingRequest {
  brandName?: string;
  isSearchByGenericName?: boolean;
  isInsurance?: number;
  storeID?: number;
  pageIndex?: number;
  pageSize?: number;
  countTotal?: boolean;
}
