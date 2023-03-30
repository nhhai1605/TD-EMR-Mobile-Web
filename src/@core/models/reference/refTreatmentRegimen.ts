import { GetDrugForSellVisitor } from '../consultation/prescriptionDetail';

export interface RefTreatmentRegimen {
  treatmentRegimenID?: number;
  treatmentRegimenCode?: string;
  treatmentRegimenName?: string;
  icD10Code?: string;
  treatmentRegimenNote?: string;
  isDeleted?: boolean;
  recCreatedDate?: string;
  createdStaffID?: number;
  lastUpdatedDate?: string;
  lastUpdatedStaffID?: number;
  refTreatmentRegimenDrugDetails?: RefTreatmentRegimenDrugDetail[];
  refTreatmentRegimenPCLDetails?: RefTreatmentRegimenPCLDetail[];
  refTreatmentRegimenServiceDetails?: RefTreatmentRegimenServiceDetail[];
  drugForSellVisitors?: GetDrugForSellVisitor[];
}

export interface RefTreatmentRegimenDrugDetail {
  treatmentPeriodic?: string;
  lastUpdatedStaffID?: number;
  lastUpdatedDate?: string;
  createdStaffID?: number;
  recCreatedDate?: string;
  isDeleted?: boolean;
  treatmentRegimenDrugDetailNote?: string;
  genericCode?: string;
  quantity?: number;
  eDose?: number;
  aDose?: number;
  mDose?: number;
  genericID?: number;
  v_TreatmentPeriodic?: number;
  treatmentRegimenID?: number;
  treatmentRegimenDrugDetailID?: number;
  nDose?: number;
  genericName?: string;
}

export interface RefTreatmentRegimenPCLDetail {
  treatmentRegimenPCLDetailID?: number;
  treatmentRegimenID?: number;
  v_TreatmentPeriodic?: number;
  pclExamTypeID?: number;
  pclExamTypeCode?: string;
  pclExamTypeName?: string;
  treatmentRegimenPCLDetailNote?: string;
  isDeleted?: boolean;
  recCreatedDate?: string;
  createdStaffID?: number;
  lastUpdatedDate?: string;
  lastUpdatedStaffID?: number;
  treatmentPeriodic?: string;
  v_PCLMainCategory?: number;
  v_PCLMainCategoryValue?: string;
}

export interface RefTreatmentRegimenServiceDetail {
  treatmentRegimenServiceDetailID?: number;
  treatmentRegimenID?: number;
  v_TreatmentPeriodic?: number;
  treatmentRegimenServiceDetailNote?: string;
  medServiceID?: number;
  medicalServiceTypeID?: number;
  medicalServiceTypeName?: string;
  medServiceCode?: string;
  medServiceName?: string;
  isDeleted?: boolean;
  recCreatedDate?: string;
  createdStaffID?: number;
  lastUpdatedDate?: string;
  lastUpdatedStaffID?: number;
  treatmentPeriodic?: string;
}
