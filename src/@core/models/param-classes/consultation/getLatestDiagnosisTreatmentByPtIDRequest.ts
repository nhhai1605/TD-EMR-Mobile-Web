export interface GetLatestDiagnosisTreatmentByPtIDRequest {
  patientID?: number;
  ptRegistrationID?: number;
  nationalMedCode?: string;
  opt?: number;
  latest?: boolean;
}
