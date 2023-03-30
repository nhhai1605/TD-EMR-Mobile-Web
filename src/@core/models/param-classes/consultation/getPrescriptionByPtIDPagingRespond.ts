import { Prescription } from '@core/models/consultation/prescription';

export interface GetPrescriptionByPtIDPagingRespond {
  listPrescriptionRespond: Prescription[];
  totalCount: number;
}
