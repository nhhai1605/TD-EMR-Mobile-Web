export interface GetDiagnosisTreatmentListByPtIDRequest {
  patientID?: number;
  ptRegistrationID?: number;
  nationalMedCode?: string;
  opt?: number;
  v_Behaving?: number;
  pageIndex?: number;
  pageSize?: number;
}
