import { ChargeableItemTypeEnum } from '../enums/chargeableItemType';
import { EntityStateEnum } from '../enums/entityState';
import { Location } from '../reference/location';
import { ConsultationTimeSegments } from './consultationTimeSegments';
import { DeptLocation } from './deptLocation';

export interface PatientApptServiceDetails {
  appointmentID?: number;
  apptSvcDetailID?: number;
  medServiceID?: number;
  medService?: RefMedicalServiceItem;
  deptLocationID?: number;
  deptLocation?: DeptLocation;
  apptTimeSegmentID?: number;
  apptTimeSegment?: ConsultationTimeSegments;
  deptLocationList?: DeptLocation[];
  apptTimeSegmentList?: ConsultationTimeSegments[];
  serviceSeqNum?: number;
  serviceSeqNumType?: number;
  v_AppointmentType?: number;
  staffFullName?: string;
  result?: string;
  entityState?: EntityStateEnum;
  consultationRoomStaffAllocID?: number;
  apptStartDate?: Date;
  apptEndDate?: Date;
  clientContractSvcPtID?: number;
  packServDetailID?: number;
}

export interface RefMedicalServiceItem {
  medServiceID?: number;
  staffID?: number;
  deptID?: number;
  medicalServiceTypeID?: number;
  description?: string;
  partnerShipID?: number;
  medServiceCode?: string;
  medServiceName?: string;
  objLocation?: Location;
  vATRate?: number;
  childrenUnderSixPrice?: number;
  priceForHIPatient?: number;
  expiryDate?: string;
  isExpiredDate?: boolean;
  byRequest?: boolean;
  isActive?: boolean;
  isDeleted?: boolean;
  v_RefMedServiceItemsUnit?: number;
  serviceMainTime?: number;
  v_NewPriceType?: number;
  isPackageService?: boolean;
  ptRegDetailID?: number;
  v_CatastropheType?: number;
  hitTypeID?: number;
  allDeptLocation?: DeptLocation[];
  refMedicalServiceType?: RefMedicalServiceType;
  isCheckedInDataList?: boolean;
  v_AppointmentType?: number;
  hiCode5084?: string;
  isAllowToPayAfter?: number;
  medServiceName_Ax?: string;
  hiCode?: string;
  updatedTime?: string;
  updatedStaffID?: number;
  v_Surgery_Tips_Item?: number;
  v_Surgery_Tips_Type?: number;
  hiApproved?: boolean;
  hiPayRatio?: number;
  hiPayRatioDisplay?: number;
  isMedicalExamination?: boolean;
  v_SpecialistType?: number;
  genderType?: string;
  isReport?: boolean;
  medServiceReportName?: string;
  cPOE_Item?: boolean;
  listDeptID?: string;
  isXLCT?: boolean;
  isNeedToPayAppointment?: boolean;
  isSelected?: boolean;
  price?: number;
  priceDifference?: number;
  hiPayment?: number;
  patientPayment?: number;
  normalPrice?: number;
  hiPatientPrice?: number;
  hiAllowedPrice?: number;
  chargeableItemType?: ChargeableItemTypeEnum;
  normalPriceNew?: number;
  hiPatientPriceNew?: number;
  hiAllowedPriceNew?: number;
  invoicePrice?: number;
}

export interface RefMedicalServiceType {
  medicalServiceTypeID?: number;
  medicalServiceGroupID?: number;
  objMedicalServiceGroupID?: RefMedicalServiceGroups;
  medicalServiceTypeCode?: string;
  medicalServiceTypeName?: string;
  medicalServiceTypeDescription?: string;
  v_RefMedicalServiceInOutOthers?: number;
  v_RefMedicalServiceTypes?: number;
  isActive?: boolean;
}

export interface RefMedicalServiceGroups {
  medicalServiceGroupID?: number;
  medicalServiceGroupCode?: string;
  medicalServiceGroupName?: string;
  medicalServiceGroupDescription?: string;
  refMedicalServiceGroupItems?: RefMedicalServiceGroupItem[];
  staffID: number;
}
export interface RefMedicalServiceGroupItem {
  medicalServiceGroupItemID?: number;
  medicalServiceGroupID?: number;
  medServiceID?: number;
  pCLExamTypeID?: number;
  isDeleted?: boolean;
  recCreatedDate?: string;
}
