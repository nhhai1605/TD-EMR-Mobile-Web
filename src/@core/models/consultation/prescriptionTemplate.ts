import { Prescription } from './prescription';

export interface PrescriptionTemplate {
  prescriptionTemplateID?: number;
  doctorStaffID?: number;
  prescriptID?: number;
  comment?: string;
  staffID?: number;
  isMarkDeleted?: boolean;
  prescription?: Prescription;
  recDateCreated?: string;
}
