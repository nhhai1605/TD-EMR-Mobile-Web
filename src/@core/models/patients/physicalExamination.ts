export interface PhysicalExamination {
  phyExamID?: number;
  isEdit?: boolean;
  isCancel?: boolean;
  isSave?: boolean;
  respiratoryRate?: number;
  temperature?: number;
  spO2?: number;
  staffID?: number;
  patientID?: number;
  isActive?: boolean;
  commonMedicalRecord?: CommonMedicalRecord;
  ptRegistrationID?: number;
  v_RegistrationType?: number;
  bustSize?: number;
  isDeleted?: boolean;
  commonMedRecID?: number;
  recordDate?: string;
  height?: number;
  weight?: number;
  bmi?: number;
  v_HealthyClassification?: number;
  diastolicPressure?: number;
  systolicPressure?: number;
  pulse?: number;
  waist?:number;
  hip?:number;
  neck?:number;
}

export interface CommonMedicalRecord {
  staffID?: number;
  patientID?: number;
  ptRegDetailID?: number;
  commonMedRecID?: number;
}
