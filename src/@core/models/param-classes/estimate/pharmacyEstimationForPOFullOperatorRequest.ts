import { PharmacyEstimationForPO } from '@core/models/estimate/pharmacyEstimationForPO';

export interface PharmacyEstimationForPO_FullOperatorRequest {
  v_MedProductType: number;
  estimate: PharmacyEstimationForPO;
  isHIStorage: boolean;
}
