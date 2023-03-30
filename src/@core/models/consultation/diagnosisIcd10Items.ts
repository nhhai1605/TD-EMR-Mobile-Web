import { Lookup } from '../reference/lookup';
import { RecordStateEnum } from '../enums/recordState';
import { DiseasesReference } from '../registrations/smallProcedure';

export interface DiagnosisIcd10Items {
  diagIcd10ItemID: number;
  diagnosisIcd10ListID: number;
  icD10Code: string;
  v_DiagIcdStatus: number;
  isMain: boolean;
  isCongenital: boolean;
  diseasesReference: DiseasesReference;
  isInvalid: boolean;
  recordState: RecordStateEnum;
  countValue: number;
}
