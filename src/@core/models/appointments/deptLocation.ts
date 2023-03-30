import { Location } from '../reference/location';
import { RefDepartment } from '../reference/refDepartment';
import { ConsultationTimeSegments } from './consultationTimeSegments';

export interface DeptLocation {
  deptLocationID?: number;
  lID?: number;
  location?: Location | null;
  deptID?: number;
  refDepartment?: RefDepartment | null;
  objConsultationTimeSegments?: ConsultationTimeSegments | null;
  currentSeqNumber?: number;
  numberOfSeq?: number;
}

export interface DeptLocationCustom {
  deptLocationID?: number;
  locationName?: string;
}
