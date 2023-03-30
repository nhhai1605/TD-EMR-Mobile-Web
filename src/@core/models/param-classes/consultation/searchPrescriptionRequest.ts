import { PrescriptionSearchCriteria } from '@core/models/consultation/prescriptionSearchCriteria';

export interface SearchPrescriptionRequest {
  criteria: PrescriptionSearchCriteria;
  pageIndex: number;
  pageSize: number;
  bCountTotal: boolean;
}
