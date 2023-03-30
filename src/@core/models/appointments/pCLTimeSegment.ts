import { V_PCLMainCategoryEnum } from '../enums/vPCLMainCategory';

export interface PCLTimeSegment {
  paraclinicalTimeSegmentID?: number;
  segmentName?: string;
  segmentDescription?: string;
  startTime?: string;
  endTime?: string;
  v_PCLMainCategory?: V_PCLMainCategoryEnum;
}
