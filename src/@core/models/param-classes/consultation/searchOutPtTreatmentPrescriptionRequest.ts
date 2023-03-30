import { PrescriptionSearchCriteria } from '@core/models/consultation/prescriptionSearchCriteria';

export interface SearchOutPtTreatmentPrescriptionRequest {
  criteria: PrescriptionSearchCriteria;
  searchTime: string;
  pageIndex: number;
  pageSize: number;
}
