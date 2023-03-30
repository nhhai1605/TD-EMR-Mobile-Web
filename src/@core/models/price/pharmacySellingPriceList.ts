import { Staff } from '../staff';
import { PharmacySellingItemPrices } from './pharmacySellingItemPrices';

export interface PharmacySellingPriceList {
  canDelete?: boolean;
  canEdit?: boolean;
  objApprovedStaffID?: Staff;
  objStaffID?: Staff;
  isActive?: boolean;
  isDeleted?: boolean;
  effectiveDate?: string;
  approvedStaffID?: number;
  staffID?: number;
  priceListTitle?: string;
  recCreatedDate?: string;
  pharmacySellingPriceListID?: number;
  priceListType?: string;
  objPharmacySellingItemPrices?: PharmacySellingItemPrices[];
}
