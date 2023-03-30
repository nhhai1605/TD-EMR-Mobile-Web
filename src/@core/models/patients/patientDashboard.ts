export interface IPatientDashboard {
  lstPhysicalExamination: IDashboardPhysicalExamination[];
  lstDiagnosisTreatment: IDashboardDiagnosisTreatment[];
  lstICD10Items: IDashboardICD10Items[];
  lstPCLImageResult: IDashboardPCLImageResult[];
  lstPCLLaboratoryResult: IDashboardPCLLaboratoryResult[];
  lstPrescriptionDetails: IDashboardPrescriptionDetail[];
  riskFactors: IDashboardRiskFactors;
  warningAndAllergies: IDashboardWarningAndAllergies[];
  diagnosisFreeText: string;
  patientID: number;
}

export interface IDashboardICD10Items {
  dTItemID: number;
  isMain: boolean;
  isEnglish: boolean;
  icD10Code: string;
  diseaseNameVN: string;
  ptRegDetailID: number;
  diseaseName: string;
}

export interface IDashboardDiagnosisTreatment {
  dtItemID?: number;
  reason?: string;
  orientedTreatment?: string;
  diagnosisFinal?: string;
  treatmentPlan?: string;
  medServiceName: string;
  ptRegDetailID: number;
}

export interface IDashboardPCLImageResult {
  pclImgResultID?: number;
  pclExamTypeName?: string;
  resultExplanation?: string;
  descriptionExplanation?: string;
}

export interface IDashboardPCLLaboratoryResult {
  pclExamTypeName?: string;
  resultExplanation?: string;
  pclExamTestItemUnit?: string;
  isAbnormal?: boolean;
  resultExplanation_Old?: string;
  isChildren?: boolean;
  isNoNeedResult?: boolean;
  groupID?: number;
}

export interface IDashboardPrescriptionDetail {
  prescriptID?: number;
  drugID?: number;
  prescriptDetailID?: number;
  drugDescription?: string;
  qty?: number;
  morning?: number;
  lunch?: number;
  evening?: number;
  night?: number;
  directions?: string;
  note?: string;
  daily?: number;
  repeat?: boolean;
  strength?: string;
  medServiceName: string;
  ptRegDetailID: number;
}

export interface IDashboardPhysicalExamination {
  phyExamID: number;
  height?: number;
  weight?: number;
  bmi?: number;
  systolicPressure?: number;
  diastolicPressure?: number;
  pulse?: number;
  temperature?: number;
  spO2?: number;
  bmI_Signal?: number;
  spO2_Signal?: number;
  respiratoryRate?: number;
}

export interface IDashboardRiskFactors {
  riskFactorID: number;
  smokingDescr: string;
  drinkingDescr: string;
  diabeticsDescr: string;
  hypertensionDescr: string;
  heartDiseaseDescr: string;
  prehistoricSurgeryDescr: string;
  familyHistoryDescr: string;
  prehistoricMaternity: string;
  strokeDescr: string;
}

export interface IDashboardWarningAndAllergies {
  warning?: string;
  allergies?: string;
  reactions?: string;
}

export const patientInit: IPatientDashboard = {
  diagnosisFreeText: '',
  lstPhysicalExamination: [],
  lstDiagnosisTreatment: [],
  lstICD10Items: [],
  lstPCLImageResult: [],
  lstPCLLaboratoryResult: [],
  lstPrescriptionDetails: [],
  riskFactors: null,
  warningAndAllergies: [],
  patientID: null
};
