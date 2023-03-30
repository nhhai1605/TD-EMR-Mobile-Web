import { PCLExamTypeSearchCriteria } from '../configuration/pCLExamTypeSearchCriteria';

export interface PCLExamTypes_List_PagingRequest {
  searchCriteria?: PCLExamTypeSearchCriteria;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  countTotal?: boolean;
}

export interface PCLExamTypeLocations_XMLInsertRequest {
  lstPCLExamTypeID?: number[];
  deptLocationID?: number;
}

export interface PCLExamTypeLocations_ByDeptLocationIDRequest {
  pCLExamTypeName?: string;
  deptLocationID?: number;
}

export interface PCLExamTypeLocations_MarkDeletedRequest {
  pCLExamTypeID?: number;
  deptLocationID?: number;
}
