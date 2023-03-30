import { EntityStateEnum } from '../enums/entityState';
import { RefGenericDrugDetail } from '../pharmacy/refGenericDrugDetail';

export interface PharmacyEstimationForPODetail {
  adjustedQty?: number;
  priority?: number;
  outAverageQty?: number;
  packageQty?: number;
  checked?: boolean;
  refGenMedProductDetails?: RefGenericDrugDetail;
  supplierID?: number;
  packagePrice?: number;
  unitPrice?: number;
  toDateOutQty?: number;
  outQtyLastTwelveMonths?: number;
  numberOfEstimatedMonths_F?: number;
  entityState?: EntityStateEnum;
  estimatedQty_F?: number;
  remainQty?: number;
  outQtyPrevFourthMonth?: number;
  outQtyPrevThirdMonth?: number;
  outQtyPrevSecondMonth?: number;
  outQtyPrevFirstMonth?: number;
  drugID?: number;
  pharmacyEstimatePoID?: number;
  pharmacyEstimatePoDetailID?: number;
  totalPrice?: number;
}
