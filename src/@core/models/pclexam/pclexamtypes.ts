
export interface GetPCLExamTypes_PagingRequest{
  searchCriteria? : pCLExamTypeSearchCriteria;
  pageIndex? : number;
  pageSize? : number;
  orderBy? : string;
  countTotal? : boolean;
}

export interface pCLExamTypeSearchCriteria{
  pCLExamTypePriceListID?: number;
  pCLExamTypeName?: string;
  v_PCLMainCategory?: number;
  pCLExamTypeSubCategoryID?: number;
  isNotInPCLItems?: boolean;
  isNotInPCLExamTypeLocations?: boolean
  pCLFormID?: number;
  orderBy?: string;
  isExternalExam?: boolean;
}
