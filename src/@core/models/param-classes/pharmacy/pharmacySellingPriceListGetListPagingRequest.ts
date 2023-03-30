import { PharmacySellingPriceListSearchCriteria } from '@core/models/pharmacy/pharmacySellingPriceListSearchCriteria';

export interface PharmacySellingPriceList_GetList_PagingRequest {
  searchCriteria: PharmacySellingPriceListSearchCriteria;
  pageIndex: number;
  pageSize: number;
  orderBy: string;
  countTotal: boolean;
}
