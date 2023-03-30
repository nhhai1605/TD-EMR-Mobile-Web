import { HealthCheckPatient } from './healthCheckPatient';
import { HealthCheckServiceItem } from './healthCheckServiceItem';

export interface ServiceItemPatientLinkCollection {
  clientContractSvcPtID: number;
  isDeleted: boolean;
  recordCreatedDate: string;
  contractMedRegItem: HealthCheckServiceItem;
  contractPatient: HealthCheckPatient;
}
