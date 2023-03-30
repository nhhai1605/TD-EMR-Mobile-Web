//import { PatientServiceRecord } from '../registrations/patientServiceRecord';
import { Staff } from '../staff';

export interface PrescriptionIssueHistory {
  issueID?: number;
  prescriptID?: number;
  serviceRecID?: number;
  ptRegDetailID?: number;
  appointmentID?: number;
  issuedDateTime?: string;
  origIssuedDateTime?: string;
  issuerStaffID?: number;
  secretaryStaffID?: number;
  reIssuerStaffID?: number;
  timesNumberIsPrinted?: number;
  v_PrescriptionNotes?: number;
  v_PrescriptionIssuedCase?: number;
  origCreatorDoctorNames?: string;
  //patientServiceRecord?: PatientServiceRecord;
  objIssuerStaffID?: Staff;
  objReIssuerStaffID?: Staff;
  storeServiceSeqNum?: number;
  storeServiceSeqNumType?: number;
  iX_IssuedDateTime?: number;
  isOutCatConfirmed?: boolean;
  isPrimaryPrescription?: boolean;
  issueIDOld?: number;
  originalPrescriptID?: number;
  creator?: string;
  hisID?: number;
  author?: string;
  prescriptionNotes?: string;
  deptLocID?: number;
}
