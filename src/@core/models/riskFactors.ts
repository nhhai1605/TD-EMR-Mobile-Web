import { CommonMedicalRecord } from './patients/physicalExamination';

export interface RiskFactors {
  dyslipidemia?: boolean;
  obesityDescr?: string;
  hypertension?: boolean;
  hypertensionDescr?: string;
  other?: string;
  stroke?: boolean;
  strokeDescr?: string;
  heartDisease?: boolean;
  heartDiseaseDescr?: string;
  prehistoricSurgery?: boolean;
  prehistoricSurgeryDescr?: string;
  familyHistory?: boolean;
  familyHistoryDescr?: string;
  prehistoricMaternity?: boolean;
  obesity?: boolean;
  dyslipidemiaDescr?: string;
  commonMedicalRecord?: CommonMedicalRecord;
  diabeticsDescr?: string;
  riskFactorID?: number;
  patientID?: number;
  prehistoricMaternityDescr?: string;
  commonMedRecID?: number;
  createdDate?: string;
  staffID?: number;
  smokingDescr?: string;
  drinking?: boolean;
  drinkingDescr?: string;
  diabetics?: boolean;
  smoking?: boolean;
}
