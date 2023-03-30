import { PCLExamTypePriceListSearchCriteria } from './pCLExamTypePriceListSearchCriteria';

export interface PCLExamTypePrices_ByPCLExamTypeID_PagingRequest {
  searchCriteria?: PCLExamTypePriceListSearchCriteria;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  countTotal?: boolean;
}
