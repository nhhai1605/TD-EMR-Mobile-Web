import { PharmacyEstimationForPODetail } from './pharmacyEstimationForPODetail';

export interface PharmacyEstimationForPO {
  estRemark?: string;
  canNew?: boolean;
  canSave?: boolean;
  canOK?: boolean;
  isOrder?: boolean;
  estimationDetails?: PharmacyEstimationForPODetail[];
  objectValue?: string;
  fullName?: string;
  v_EstimateType?: number;
  canPrint?: boolean;
  v_MedProductType?: number;
  dateOfEstimation?: string;
  staffID?: number;
  estimationCode?: string;
  pharmacyEstimatePoID?: number;
  canDelete?: boolean;
}
