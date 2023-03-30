export interface PCLExamTypeSearchCriteria {
  pCLExamTypePriceListID?: number;
  pCLExamTypeName?: string;
  v_PCLMainCategory?: number;
  pCLExamTypeSubCategoryID?: number;
  isNotInPCLItems?: boolean;
  isNotInPCLExamTypeLocations?: boolean;
  pCLFormID?: number;
  orderBy?: string;
  isExternalExam?: boolean;
}

export interface GetPCLExamTypes_PagingRequest {
  searchCriteria?: PCLExamTypeSearchCriteria;
  pageIndex?: number;
  pageSize?: number;
  orderBy?: string;
  countTotal?: boolean;
}
