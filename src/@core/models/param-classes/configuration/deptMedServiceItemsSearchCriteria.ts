export interface DeptMedServiceItemsSearchCriteria {
  deptID?: number;
  medicalServiceTypeID?: number;
  medServiceCode?: string;
  medServiceName?: string;
  medServiceItemPriceListID?: number;
  orderBy?: string;
}
