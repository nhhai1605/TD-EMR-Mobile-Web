import { MedServiceItemPrice } from '@core/models/price/medServiceItemPrice';
import { MedServiceItemPriceList } from '@core/models/price/medServiceItemPriceList';

export interface MedServiceItemPriceList_UpdateRequest {
  medserviceItemPriceList?: MedServiceItemPriceList;
  objCollection?: MedServiceItemPrice[];
  objCollection_Insert?: MedServiceItemPrice[];
  objCollection_Update?: MedServiceItemPrice[];
}
