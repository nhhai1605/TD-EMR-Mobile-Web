import { PCLExamType } from '@core/models/appointments/pCLExamType';
import { PCLExamTypeTestItems } from '@core/models/price/pCLExamTypeTestItems';

export interface PCLExamTypes_Save_IsLabRequest {
  pCLExamTypeRequest?: PCLExamType;
  isInsert?: boolean;
  testItemIsExamType?: boolean;
  pCLExamTestItemUnitForPCLExamType?: string;
  pCLExamTestItemRefScaleForPCLExamType?: string;
  staffID?: number;
  dataPCLExamTestItems_Insert?: PCLExamTypeTestItems[];
  dataPCLExamTestItems_Update?: PCLExamTypeTestItems[];
  dataPCLExamTestItems_Delete?: PCLExamTypeTestItems[];
}
