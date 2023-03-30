import { TreatmentHistoryGroupContent } from './treatmentHistoryGroupContent';

export interface TreatmentHistory {
  admissionDate?: string;
  dischargeDate?: string;
  medServiceName?: string;
  inPt?: boolean;
  v_PCLMainCategory?: number;
  groupText?: string;
  ordinal?: number;
  prescriptID?: number;
  dTItemID?: number;
  patientPCLReqID?: number;
  pCLExamTypeID?: number;
  ptRegistrationID?: number;
  serviceRecID?: number;
  smallProcedureID?: number;
  treatmentHistoryGroupContent?: TreatmentHistoryGroupContent;
  outPtTreatmentProgramID?: number;
  medicalInstructionDate?: string;
  pCLExamTypeSubCategoryID?: number;
  pCLResultParamImpID?: number;
}
