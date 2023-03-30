import { RefMedicalServiceType } from '../appointments/patientApptServiceDetails';
import { Staff } from '../staff';

export interface MedServiceItemPriceList {
  canDelete?: boolean;
  canEdit?: boolean;
  objApprovedStaffID?: Staff;
  objStaffID?: Staff;
  objRefMedicalServiceType?: RefMedicalServiceType;
  isActive?: boolean;
  priceListType?: string;
  isDeleted?: boolean;
  approvedStaffID?: number;
  staffID?: number;
  priceListTitle?: string;
  recCreatedDate?: string;
  medicalServiceTypeID?: number;
  deptID?: number;
  medServiceItemPriceListID?: number;
  effectiveDate?: string;
  isChecked?: boolean;
}
