import { V_HosClientType } from '../enums/emrEnum';
import { HosClientType } from './hosClientType';

export interface HealthCheckCustomer {
  clientName: string;
  companyName: string;
  hosClientCode: string;
  hosClientID: number;
  isActive: boolean;
  v_HosClientType: V_HosClientType;
  hosClientType: HosClientType;
}
