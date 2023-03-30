export interface MedServiceItemPriceSearchCriteria {
  deptMedServItemID?: number;
  medServiceID?: number;
  medServiceItemPriceListID?: number;
  medicalServiceTypeID?: number;
  medServiceCode?: string;
  medServiceName?: string;
  v_TypePrice?: number;
  fromDate?: string;
  toDate?: string;
  orderBy?: string;
}
