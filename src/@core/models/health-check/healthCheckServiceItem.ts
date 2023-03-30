import { MedRegItem } from './medRegItem';

export interface HealthCheckServiceItem {
  clientContractSvcID: number;
  hosClientContractID: number;
  isChecked: boolean;
  isDeleted: boolean;
  isProcessed: boolean;
  recCreatedDate: string;
  medRegItem: MedRegItem;
  medExamServiceID: number;
}
