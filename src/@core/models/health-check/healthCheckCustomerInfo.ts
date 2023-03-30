import { V_HosClientType } from '../enums/emrEnum';

export interface HealthCheckCustomerInfo {
  hosClientID: number | null;
  customerCode: string;
  customerName: string;
  companyName: string;
  taxCode: string;
  address: string;
  contact: string;
  phone: string;
  fax: string;
  website: string;
  email: string;
  note: string;
  type: V_HosClientType;
  accountNumber: string;
  bankName: string;
  branch: string;
}
