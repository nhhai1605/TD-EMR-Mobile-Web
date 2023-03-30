import { MedServiceItemPriceSearchCriteria } from './medServiceItemPriceSearchCriteria';

export interface MedServiceItemPriceByDeptMedServItemID_PagingRequest {
  searchCriteria?: MedServiceItemPriceSearchCriteria;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  countTotal?: boolean;
}
