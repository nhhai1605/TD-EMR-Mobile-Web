import { DeptMedServiceItemsSearchCriteria } from './deptMedServiceItemsSearchCriteria';

export interface GetDeptMedServiceItems_DeptIDPagingRequest {
  criteria?: DeptMedServiceItemsSearchCriteria;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  countTotal?: boolean;
}
