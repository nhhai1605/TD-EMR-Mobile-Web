import { Staff } from '../staff';
import { PharmacyReferenceItemPrice } from './pharmacyReferenceItemPrice';

export interface PharmacyReferencePriceList {
  referencePriceListID?: number;
  title?: string;
  createdStaff?: Staff;
  recCreatedDate?: string;
  pharmacyRefItemPriceCollection?: PharmacyReferenceItemPrice[];
  isActive?: boolean;
}
