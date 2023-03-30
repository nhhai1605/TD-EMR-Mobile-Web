import { RecordStateEnum } from '../enums/recordState';
import { Staff } from '../staff';

export interface PromoDiscountProgram {
  promoDiscProgID?: number;
  promoDiscCode?: string;
  promoDiscName?: string;
  v_PromoDiscType?: number;
  staffID?: number;
  authorizedStaffID?: number;
  reasonOrNote?: string;
  validFromDate?: string;
  validToDate?: string;
  recCreatedDate?: string;
  discountPercent?: number;
  isOnPriceDiscount?: boolean;
  v_RegistrationType?: number;
  recordState?: RecordStateEnum;
  confirmedStaff?: Staff;
}
