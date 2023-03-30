import { V_HosClientType } from '../enums/emrEnum';

export interface HosClientType {
  isChecked: boolean;
  lookupID: V_HosClientType;
  objectName: string;
  objectTypeID: number;
  objectValue: string;
}
