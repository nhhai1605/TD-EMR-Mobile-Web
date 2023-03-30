import { Staff } from '../staff';

export interface PCLExamTypePriceList {
  pCLExamTypePriceListID?: number;
  recCreatedDate?: string;
  priceListTitle?: string;
  staffID?: number;
  approvedStaffID?: number;
  effectiveDate?: string;
  isDeleted?: boolean;
  isActive?: boolean;
  objStaffID?: Staff;
  objApprovedStaffID?: Staff;
  canEdit?: boolean;
  canDelete?: boolean;
  priceListType?: string;
  isChecked?: boolean;
}
