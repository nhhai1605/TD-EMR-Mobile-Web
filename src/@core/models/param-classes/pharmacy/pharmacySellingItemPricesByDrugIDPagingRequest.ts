import { PharmacySellingItemPricesSearchCriteria } from "@core/models/pharmacy/pharmacySellingItemPricesSearchCriteria";

export interface PharmacySellingItemPrices_ByDrugID_PagingRequest {
  searchCriteria: PharmacySellingItemPricesSearchCriteria;
  pageIndex: number;
  pageSize: number;
  orderBy: string;
  countTotal: boolean;
}
