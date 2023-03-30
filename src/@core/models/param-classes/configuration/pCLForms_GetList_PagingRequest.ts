import { PCLFormsSearchCriteria } from '@core/models/configuration/pCLFormsSearchCriteria';

export interface PCLForms_GetList_PagingRequest {
  searchCriteria?: PCLFormsSearchCriteria;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  countTotal?: boolean;
}
