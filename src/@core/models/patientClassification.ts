import { PatientTypeEnum } from './enums/patientTypeEnum';
import { HealthInsurance } from './patients/healthInsurance';
import { PaperReferal } from './patients/paperReferal';

export interface PatientClassification {
  patientClassID: number;
  patientClassName: string | null;
  pCNotes: string | null;
  patientType: PatientTypeEnum;
}

export interface PatientHI_SummaryInfo {
  isCrossRegion: boolean;
  confirmedHiItem: HealthInsurance | null;
  confirmedHiItem_2: HealthInsurance | null;
  confirmedHiItem_3: HealthInsurance | null;
  confirmedPaperReferal: PaperReferal | null;
  confirmedPaperReferral_2: PaperReferal | null;
  confirmedPaperReferral_3: PaperReferal | null;
  hiBenefit: number | null;
  hiBenefit_2: number | null;
  hiBenefit_3: number | null;
}
