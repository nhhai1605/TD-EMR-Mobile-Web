export interface GetPrescriptionByPtIDPagingRequest {
  patientID?: number;
  v_PrescriptionType?: number;
  isInPatient?: boolean;
  pageIndex?: number;
  pageSize?: number;
}
