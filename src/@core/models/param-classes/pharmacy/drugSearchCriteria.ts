import { MedProductTypeEnum } from '@core/models/enums/medProductType';
import { RefStorageWarehouseLocation } from '@core/models/pharmacy/refShelfDrugLocation';

export interface DrugSearchCriteria {
  orderBy?: string;
  storeID?: number;
  storage?: RefStorageWarehouseLocation;
  brandName?: string;
  isInsurance?: number;
  isActive?: number;
  isConsult?: number;
  isShow?: number;
  faID?: number;
  medProductType?: MedProductTypeEnum;
  v_CatDrugType?: number;
}
