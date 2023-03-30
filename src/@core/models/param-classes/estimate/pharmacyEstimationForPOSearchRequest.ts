import { RequestSearchCriteria } from '@core/models/param-classes/estimate/requestSearchCriteria';

export interface PharmacyEstimationForPO_SearchRequest {
  criteria: RequestSearchCriteria;
  v_MedProductType: number;
  pageIndex: number;
  pageSize: number;
  bCount: boolean;
  isHIStorage: boolean;
}
