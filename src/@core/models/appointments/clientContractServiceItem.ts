import { Staff } from '../staff';
import { MedRegItemBase } from './medRegItemBase';

export interface ClientContractServiceItem {
  clientContractSvcID?: number;
  createdStaff?: Staff;
  medRegItem?: MedRegItemBase;
  recCreatedDate?: string;
  isDeleted?: boolean;
  isChecked?: boolean;
  hosClientContractID?: number;
  isProcessed?: boolean;
}
