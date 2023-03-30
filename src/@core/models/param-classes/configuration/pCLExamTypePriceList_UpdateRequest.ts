import { PCLExamType } from '@core/models/appointments/pCLExamType';
import { PCLExamTypePriceList } from '@core/models/price/pCLExamTypePriceList';

export interface PCLExamTypePriceList_UpdateRequest {
  pCLExamTypePriceListRequest?: PCLExamTypePriceList;
  lstPCLExamType?: PCLExamType[];
}
