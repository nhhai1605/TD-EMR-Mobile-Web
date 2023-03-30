export interface ConsultationTimeSegments {
  consultationTimeSegmentID?: number;
  segmentName?: string;
  segmentNameExt?: string;
  segmentDescription?: string;
  startTime?: string;
  endTime?: string;
  isActive?: boolean;
  currentSeqNumber?: number;
  numberOfSeq?: number;
  apptdayMaxNumConsultationAllowed?: number;
  v_TimeSegment?: number;
  isChecked?: boolean;
}
