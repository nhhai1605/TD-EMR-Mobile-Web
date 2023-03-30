import { ChargeableItemTypeEnum } from '../enums/chargeableItemType';
import { RowStateValueEnum } from '../enums/rowStateValue';
import { PCLExamTypeSubCategory } from '../reference/pCLExamTypeCombo';
import { Resources } from '../reference/resources';
import { Staff } from '../staff';
import { DeptLocation } from './deptLocation';
import { PCLTimeSegment } from './pCLTimeSegment';

export interface PCLExamType {
  pclExamTypeID?: number;
  pclExamTypeSubCategoryID?: number;
  objPCLExamTypeSubCategoryID?: PCLExamTypeSubCategory;
  pclExamTypeName?: string;
  pclExamTypeDescription?: string;
  pclExamTypeCode?: string;
  v_PCLExamTypeUnit?: number;
  isActive?: boolean;
  hiApproved?: boolean;
  isExternalExam?: boolean;
  pclFormID?: number;
  hosIDofExternalExam?: number;
  hICode?: string;
  pclExamTypeName_Ax?: string;
  hIIssueCode1?: string;
  hIIssueCode2?: string;
  medServiceID?: number;
  v_NewPriceType?: number;
  resource?: Resources[];
  pclExamTypeLocations?: PCLExamTypeLocation[];
  hITTypeID?: number;
  objPCLExamTypePrice?: PCLExamTypePrice;
  v_PCLMainCategory?: number;
  pclSectionID?: number;
  objPCLSectionID?: PCLSection;
  pclResultParamImpID?: number;
  objPCLResultParamImpID?: PCLResultParamImplementations;
  objPCLExamTypeServiceTarget?: PCLExamTypeServiceTarget;
  objDeptLocationList?: DeptLocation[];
  hICode5084?: string;
  isAllowToPayAfter?: number;
  templateFileName?: string;
  allowDayBetweenExams?: number;
  isRegimenChecking?: boolean;
  isUsed?: boolean;
  modalityCode?: string;
  isCasePermitted?: boolean;
  v_SpecialLab?: number;
  isSelected?: boolean;
  pclExamTypeComboID?: number;
  priceDifference?: number;
  coPayment?: number;
  hIPayment?: number;
  patientPayment?: number;
  qty?: number;
  normalPrice?: number;
  hIPatientPrice?: number;
  hiAllowedPrice?: number;
  chargeableItemType?: ChargeableItemTypeEnum;
  normalPriceNew?: number;
  hIPatientPriceNew?: number;
  hiAllowedPriceNew?: number;
  apptPclTimeSegments?: PCLTimeSegment[];
  isLimitedPCL?: boolean;
  pclSectionName?: string;
  rscrID?: number[];
  invoicePrice?: number;
  hiPayRatio?: number
}

export interface PCLExamTypeLocation {
  pCLExamTypeLocID?: number;
  pCLExamTypeID?: number;
  deptLocationID?: number;
  isDeleted?: boolean;
  deptLocation?: DeptLocation;
}

export interface PCLExamTypePrice {
  pCLExamTypePriceID?: number;
  pCLExamTypeID?: number;
  pCLExamTypePriceListID?: number;
  recCreatedDate?: string;
  staffID?: number;
  approvedStaffID?: number;
  normalPrice?: number;
  suggestPrice?: number;
  priceForHIPatient?: number;
  hIAllowedPrice?: number;
  effectiveDate?: string;
  endDate?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  pCLExamTypeCode?: string;
  pCLExamTypeName?: string;
  objStaffID?: Staff;
  priceType?: string;
  normalPrice_Old?: number;
  priceForHIPatient_Old?: number;
  hIAllowedPrice_Old?: number;
  rowState?: RowStateValueEnum;
}

export interface PCLSection {
  pCLSectionID?: number;
  pCLFormID?: number;
  pCLExamGroupID?: number;
  pCLSectionName?: string;
}

export interface PCLResultParamImplementations {
  pCLResultParamImpID?: number;
  paramName?: string;
  paramEnum?: number;
  releaseEnabled?: boolean;
  pCLExamTypeSubCategoryID?: number;
  signingByStaffType?: number;
}

export interface PCLExamTypeServiceTarget {
  pCLExamTypeServiceTargetID?: number;
  pCLExamTypeID?: number;
  mondayTargetNumberOfCases?: number;
  tuesdayTargetNumberOfCases?: number;
  wednesdayTargetNumberOfCases?: number;
  thursdayTargetNumberOfCases?: number;
  fridayTargetNumberOfCases?: number;
  saturdayTargetNumberOfCases?: number;
  sundayTargetNumberOfCases?: number;
  pCLExamTypeName?: string;
  pCLExamTypeCode?: string;
}
