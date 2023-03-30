import { RefMedicalServiceItem } from './../../appointments/patientApptServiceDetails';

export interface DeptLocMedServices_XMLInsertRequest {
  deptLocationID?: number;
  objCollect?: RefMedicalServiceItem[];
}
