import { ClientContractServiceItemPatientLink } from './clientContractServiceItemPatientLink';
import { HosClientContractFinalization } from './hosClientContractFinalization';
import { HosClientContractPatient } from './hosClientContractPatient';
import { HospitalClient } from './hospitalClient';
import { Staff } from '../staff';
import { ClientContractServiceItem } from './clientContractServiceItem';
import { RefDocument } from '../reference/refDepartment';

export interface HospitalClientContract {
  hosClientContractID?: number;
  hosClient?: HospitalClient;
  contractName?: string;
  contractNo?: string;
  contractDate?: string;
  contractDescription?: string;
  validDateFrom?: string;
  validDateTo?: string;
  activationDate?: string;
  createdStaff?: Staff;
  modifiedStaff?: Staff;
  contractDocument?: RefDocument;
  recCreatedDate?: string;
  contractServiceItemCollection?: ClientContractServiceItem[];
  contractPatientCollection?: HosClientContractPatient[];
  serviceItemPatientLinkCollection?: ClientContractServiceItemPatientLink[];
  isPayAddingMoreSvs?: boolean;
  completedDate?: string;
  totalContractAmount?: number;
  finalizedDate?: string;
  clientContractFinalizationCollection?: HosClientContractFinalization[];
  discountPercent?: number;
  isCreateNewToOld?: boolean;
}
