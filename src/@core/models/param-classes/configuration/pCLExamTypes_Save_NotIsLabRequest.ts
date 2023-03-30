import { PCLExamType } from '@core/models/appointments/pCLExamType';

export interface PCLExamTypes_Save_NotIsLabRequest {
  pCLExamType?: PCLExamType;
  isInsert?: boolean;
  staffID?: number;
}
