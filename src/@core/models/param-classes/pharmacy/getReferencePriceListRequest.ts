import { PharmacySellingPriceListSearchCriteria } from '@core/models/pharmacy/pharmacySellingPriceListSearchCriteria';

export interface GetReferencePriceListRequest {
  searchCriteria: PharmacySellingPriceListSearchCriteria;
  pageIndex: number;
  pageSize: number;
  orderBy: string;
  countTotal: boolean;
}
