import { Patient } from '../patients/patient';
import { PatientGroupCollection } from './patientGroupCollection';

export interface HealthCheckPatient {
  hosClientContractID?: number;
  hosContractPtID?: number;
  isDeleted?: boolean;
  isProcessed?: boolean;
  isScheduled?: boolean;
  isSelected?: boolean;
  recCreatedDate?: string;
  totalContractPaidAmount?: number;
  totalHIPrice?: number;
  totalInvoicePrice?: number;
  patientObj?: Patient;
  patientGroupCollection?: PatientGroupCollection;
}
