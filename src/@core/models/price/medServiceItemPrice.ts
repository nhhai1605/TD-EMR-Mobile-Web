import { RefMedicalServiceItem } from '../appointments/patientApptServiceDetails';
import { Staff } from '../staff';

export interface MedServiceItemPrice {
  vATRate_Old?: number;
  hIAllowedPrice_Old?: number;
  priceForHIPatient_Old?: number;
  normalPrice_Old?: number;
  servicesIsInUse?: boolean;
  priceType?: string;
  canDelete?: boolean;
  canEdit?: boolean;
  objApprovedStaffID?: Staff;
  objStaffID?: Staff;
  objMedServiceID?: RefMedicalServiceItem;
  objDeptMedServiceItems?: DeptMedServiceItems;
  v_NewPriceType?: number;
  note?: string;
  isDeleted?: boolean;
  isActive?: boolean;
  effectiveDate?: string;
  hIAllowedPrice?: number;
  priceDifference?: number;
  priceForHIPatient?: number;
  normalPrice?: number;
  vATRate?: number;
  approvedStaffID?: number;
  staffID?: number;
  medServiceItemPriceListID?: number;
  medServiceID?: number;
  medServItemPriceID?: number;
}

export interface DeptMedServiceItems {
  deptMedServItemID?: number;
  deptID?: number;
  medServiceID?: number;
  isDeleted?: boolean;
  objRefMedicalServiceItem?: RefMedicalServiceItem;
  objMedServiceItemPrice?: MedServiceItemPrice;
  v_RefMedServiceItemsUnit?: number;
  objApptService?: ApptService;
  v_Surgery_Tips_Type?: number;
  v_Surgery_Tips_Item?: number;
}

export interface ApptService {
  apptServiceID?: number;
  medServiceID?: number;
  v_AppointmentType?: number;
}
