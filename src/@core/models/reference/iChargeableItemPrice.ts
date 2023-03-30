import { ChargeableItemTypeEnum } from '../enums/chargeableItemType';

export interface ChargeableItemPrice {
  normalPrice?: number;
  hIPatientPrice?: number;
  hIAllowedPrice?: number;
  chargeableItemType?: ChargeableItemTypeEnum;
  normalPriceNew?: number;
  hIPatientPriceNew?: number;
  hIAllowedPriceNew?: number;
}
