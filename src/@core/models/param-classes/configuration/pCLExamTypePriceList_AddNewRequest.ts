import { PCLExamType } from '@core/models/appointments/pCLExamType';
import { PCLExamTypePriceList } from '@core/models/price/pCLExamTypePriceList';

export interface PCLExamTypePriceList_AddNewRequest {
  pCLExamTypePriceListRequest?: PCLExamTypePriceList;
  lstPCLExamType?: PCLExamType[];
}
