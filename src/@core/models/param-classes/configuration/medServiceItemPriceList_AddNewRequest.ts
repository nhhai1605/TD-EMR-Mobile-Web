import { MedServiceItemPrice } from '@core/models/price/medServiceItemPrice';
import { MedServiceItemPriceList } from '@core/models/price/medServiceItemPriceList';

export interface MedServiceItemPriceList_AddNewRequest {
  medServiceItemPriceListRequest?: MedServiceItemPriceList;
  lstMedServiceItemPrice?: MedServiceItemPrice[];
}
