import { ClientContractServiceItem } from './clientContractServiceItem';
import { HosClientContractPatient } from './hosClientContractPatient';

export interface ClientContractServiceItemPatientLink {
  clientContractSvcPtID: number;
  contractMedRegItem: ClientContractServiceItem;
  contractPatient: HosClientContractPatient;
  recordCreatedDate: string;
  isDeleted: boolean;
}
