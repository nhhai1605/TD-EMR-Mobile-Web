import { CommonRecordStateEnum } from '../enums/commonRecordState';
import { RefGenericDrugDetail } from '../pharmacy/refGenericDrugDetail';

export interface PharmacyReferenceItemPrice {
  referenceItemPriceID?: number;
  referencePriceListID?: number;
  drug?: RefGenericDrugDetail;
  contractPriceAfterVAT?: number;
  contractPriceAfterVAT_Old?: number;
  hIAllowedPrice?: number;
  hIAllowedPrice_Old?: number;
  recordState?: CommonRecordStateEnum;
}
