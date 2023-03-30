import { EntityStateEnum } from './enums/entityState';
import { RecordStateEnum } from './enums/recordState';

export interface IDBRecordState {
  recordState?: RecordStateEnum;
}

export interface IDListOutput<T> {
  ids?: number[];
}

export interface IEntityState {
  entityState?: EntityStateEnum;
  isChecked?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
}

export interface ITotalPrice {
  totalInvoicePrice?: number;
  totalPriceDifference?: number;
  totalHIPayment?: number;
  totalCoPayment?: number;
  totalPatientPayment?: number;
}
