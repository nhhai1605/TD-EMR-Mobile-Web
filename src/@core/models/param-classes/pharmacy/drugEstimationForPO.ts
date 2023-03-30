export interface DrugEstimationForPO {
  canDelete: boolean;
  canNew: boolean;
  canOK: boolean;
  canPrint: boolean;
  canSave: boolean;
  dateOfEstimation: Date;
  estRemark: string;
  estimationCode: string;
  fullName: string;
  isOrder: boolean;
  objectValue: string;
  pharmacyEstimatePoID: number;
  staffID: number;
  v_EstimateType: number;
  v_MedProductType: number;
}
