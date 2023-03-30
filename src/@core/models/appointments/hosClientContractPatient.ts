import { Patient } from '../patients/patient';
import { HosClientContractPatientGroup } from './hosClientContractPatientGroup';

export interface HosClientContractPatient {
  hosContractPtID?: number;
  hosClientContractID?: number;
  patientObj?: Patient;
  clientClassification?: string;
  clientGroup?: string;
  recCreatedDate?: string;
  isDeleted?: boolean;
  totalInvoicePrice?: number;
  totalHIPrice?: number;
  isSelected?: boolean;
  isScheduled?: boolean;
  totalContractPaidAmount?: number;
  patientGroupCollection?: HosClientContractPatientGroup[];
  isProcessed?: boolean;
  ptRegistrationID?: number;
}
