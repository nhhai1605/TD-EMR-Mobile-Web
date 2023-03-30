import { PatientTypeEnum } from '../enums/patientTypeEnum';
import { HealthInsurance } from '../patients/healthInsurance';
import { PaperReferal } from '../patients/paperReferal';

export interface PatientClassification {
  patientClassID?: number;
  patientClassName?: string;
  pCNotes?: string;
  patientType?: PatientTypeEnum;
}

export interface PatientHI_SummaryInfo {
  isCrossRegion?: boolean;
  confirmedHiItem?: HealthInsurance;
  confirmedHiItem_2?: HealthInsurance;
  confirmedHiItem_3?: HealthInsurance;
  confirmedPaperReferal?: PaperReferal;
  confirmedPaperReferral_2?: PaperReferal;
  confirmedPaperReferral_3?: PaperReferal;
  hiBenefit?: number;
  hiBenefit_2?: number;
  hiBenefit_3?: number;
}
