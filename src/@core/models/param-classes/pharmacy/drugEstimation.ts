import { RefGenMedProductDetails } from '@core/models/pharmacy/refGenMedProductDetails';

export interface DrugEstimation {
  refGenMedProductDetails: RefGenMedProductDetails;
  totalPrice: number;
  adjustedQty: number;
  packageQty;
  estimatedQty_F: number;
  numberOfEstimatedMonths_F: number;
  priority: number;
  outAverageQty: number;
  outQtyPrevFourthMonth: number;
  outQtyPrevThirdMonth: number;
  outQtyPrevSecondMonth: number;
  outQtyPrevFirstMonth: number;
  remainQty: number;
}
