import { RefMedicalServiceItemsSearchCriteria } from '@core/models/param-classes/configuration/refMedicalServiceItemsSearchCriteria';

export interface GetMedServiceItems_PagingRequest {
  searchCriteria?: RefMedicalServiceItemsSearchCriteria;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  countTotal?: boolean;
}
