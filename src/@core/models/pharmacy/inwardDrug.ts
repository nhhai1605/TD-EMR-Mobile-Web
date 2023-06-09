import { EntityStateEnum } from '../enums/entityState';
import { RefGenericDrugDetail } from './refGenericDrugDetail';
import { Staff } from '../staff';
import { RefShelfDrugLocation } from './refShelfDrugLocation';
import { ChargeableItemTypeEnum } from '../enums/chargeableItemType';

export interface InwardDrug {
  inID?: number;
  sdlID?: number;
  staffID?: number;
  inviID?: number;
  drugID?: number;
  inBatchNumber?: string;
  inProductionDate?: Date;
  inExpiryDate?: Date;
  inQuantity?: number;
  packageQuantity?: number;
  inBuyingPrice?: number;
  packagePrice?: number;
  inBuyingPriceActual?: number;
  remaining?: number;
  isLoad?: number;
  isPercentage?: boolean;
  pharmacyPoDetailID?: number;
  noPrint?: boolean;
  isUnitPackage?: boolean;
  drugVersionID?: number;
  inCost?: number;
  swhlName?: string;
  pharmacyPoID?: number;
  pONumber?: string;
  v_GoodsType?: number;
  goodsTypeName?: string;
  sdlDescription?: string;
  remainTotalSell?: number;
  totalPriceNotVAT?: number;
  discounting?: number;
  discountingByPercent?: number;
  isPercent?: boolean;
  isCanEdit?: boolean;
  selectedShelfDrugLocation?: RefShelfDrugLocation;
  selectedStaffInput?: Staff;
  selectedDrug?: RefGenericDrugDetail;
  normalPrice?: number;
  hiPatientPrice?: number;
  hiAllowedPrice?: number;
  chargeableItemType?: ChargeableItemTypeEnum;
  normalPriceNew?: number;
  hiPatientPriceNew?: number;
  hiAllowedPriceNew?: number;
  entityState?: EntityStateEnum;
  sellingPriceVATDef?: number;
  vat?: number;
  drugDeptInIDOrig?: number;
  isNotVat?: boolean;
  outID?: number;
}
