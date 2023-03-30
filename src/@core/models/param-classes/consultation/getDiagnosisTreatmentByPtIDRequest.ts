export interface GetDiagnosisTreatmentByPtIDRequest {
  patientID?: number;
  ptRegistrationID?: number;
  nationalMedCode?: string;
  opt?: number;
  latest?: boolean;
  v_RegistrationType?: number;
  serviceRecID?: number;
  ptRegDetailID?: number;
}
