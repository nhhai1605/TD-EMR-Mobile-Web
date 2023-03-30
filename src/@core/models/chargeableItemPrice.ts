import { ChargeableItemTypeEnum } from './enums/chargeableItemType';

export interface ChargeableItemPrice {
  normalPrice?: number;
  hiPatientPrice?: number;
  hiAllowedPrice?: number;
  chargeableItemType?: ChargeableItemTypeEnum;
  normalPriceNew?: number;
  hiPatientPriceNew?: number;
  hiAllowedPriceNew?: number;
  test: string;
}