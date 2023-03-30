import { Staff } from '../staff';

export interface HosClientContractFinalization {
  clientContractFinalizationID: number;
  hosClientContractID: number;
  finalizedReceiptNum: string;
  dateFinalize: string;
  staff: Staff;
  amount: number;
}
