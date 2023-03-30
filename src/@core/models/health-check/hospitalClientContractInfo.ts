import { Staff } from '../staff';
import { HealthCheckCustomer } from './healthCheckCustomer';

export interface HospitalClientContractInfo {
  activationDate?: string;
  contractDate?: string;
  contractDescription?: string;
  contractName?: string;
  contractNo?: string;
  discountPercent?: number;
  hosClientContractID: number;
  isCreateNewToOld?: boolean;
  isPayAddingMoreSvs?: boolean;
  recCreatedDate?: string;
  totalContractAmount?: number;
  validDateFrom?: string;
  validDateTo?: string;
  modifiedStaff?: Staff;
  createdStaff?: Staff;
  hosClient?: HealthCheckCustomer;
  refresh?: number;
}
