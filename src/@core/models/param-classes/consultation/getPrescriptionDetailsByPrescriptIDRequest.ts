export interface GetPrescriptionDetailsByPrescriptIDRequest {
  prescriptID?: number;
  issueID?: number;
  appointmentID?: number;
  getRemaining?: boolean;
}
