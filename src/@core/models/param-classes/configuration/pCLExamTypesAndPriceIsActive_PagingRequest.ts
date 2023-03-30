import { PCLExamTypeSearchCriteria } from '@core/models/param-classes/configuration/pCLExamTypeSearchCriteria';

export interface PCLExamTypesAndPriceIsActive_PagingRequest {
  searchCriteria?: PCLExamTypeSearchCriteria;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  countTotal?: boolean;
}
