import { PCLExamType } from '../appointments/pCLExamType';
import { GeneralSearchCriteria } from '../param-classes/configuration/generalSearchCriteria';

export interface PCLExamTypeTestItems {
  pclExamTypeTestItemID?: number;
  pclExamTypeID?: number;
  pclExamTestItemID?: number;
  v_PCLExamType?: PCLExamType;
  v_PCLExamTestItem?: PCLExamTestItems;
}

export interface PCLExamTestItems {
  pclExamTestItemID?: number;
  pclExamTestItemName?: string;
  pclExamTestItemDescription?: string;
  pclExamTestItemCode?: string;
  pclExamTestItemUnit?: string;
  pclExamTestItemRefScale?: string;
  testItemIsExamType?: boolean;
  isBold?: boolean;
  isNoNeedResult?: boolean;
  isActive?: boolean;
  codeTMP?: string;
  pclExamTypeID?: number;
  pclExamTypeName?: string;
  pclExamTestItemHICode?: string;
  pclExamTestItemHIName?: string;
  value?: string;
  value_Old?: string;
  samplingDate?: string;
  checked?: boolean;
  isAbnormal?: boolean;
}

export interface PCLExamTestItems_SearchPagingRequest {
  searchCriteria: GeneralSearchCriteria;
  pageIndex: number;
  pageSize: number;
  bCount: boolean;
}
