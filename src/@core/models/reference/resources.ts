export interface Resources {
  rscrID?: number;
  deprecTypeID?: number;
  rscrGroupID?: number;
  rscrTypeID?: number;
  supplierID?: number;
  itemName?: string;
  itemBrand?: string;
  functions?: string;
  generalTechInfo?: string;
  depreciationByTimeRate?: number;
  depreciationByUsageRate?: number;
  buyPrice?: number;
  v_RscrUnit?: number;
  onHIApprovedList?: boolean;
  warrantyTime?: number;
  isLocatable?: boolean;
  isDeleted?: boolean;
  refResourceGroup?: ResourceGroup;
  refResourceType?: ResourceType;
  v_ExpenditureSource?: number;
  hIRepResourceCode?: string;
  v_PCLMainCategory?: number;
  vResourceType?: ResourceType;
  vResourceGroup?: ResourceGroup;
  vSupplier?: Supplier;
  v_UnitLookup?: number;
  resourcesTarget?: ResourcesTargets;
  pCLExamTypeID?: number;
}

export interface ResourceGroup {
  groupName?: string;
  description?: string;
  v_ResGroupCategory?: number;
  rscrGroupID?: number;
}

export interface ResourceType {
  typeName?: string;
  description?: string;
  rscrTypeID?: number;
}

export interface ResourcesTargets {
  rscrID?: number;
  rscrTargetsID?: number;
  startWorkingHour?: number;
  endWorkingHour?: number;
  interval?: number;
  limitedUse?: number;
  numberOfUse?: number;
  lastTimeUseResources?: string;
}

export interface Supplier {
  supplierID?: number;
  supplierName?: string;
  address?: string;
  cityStateZipCode?: string;
  contactPerson?: string;
  supplierType?: number;
  telephoneNumber?: string;
  faxNumber?: string;
  pAHEmailAddress?: string;
  webSiteAddress?: string;
  certificateAgency?: string;
  supplierDescription?: string;
  active?: boolean;
  accountNumber?: string;
  supplierCode?: string;
}
