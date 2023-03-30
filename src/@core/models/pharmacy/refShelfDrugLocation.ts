import { RefDepartment } from '../reference/refDepartment';

export interface RefShelfDrugLocation {
  sdlID?: number;
  sdlDescription?: string;
}

export interface RefStorageWarehouseType {
  storeTypeID?: number;
  storeTypeName?: string;
  storeTypeDescription?: string;
}

export interface RefStorageWarehouseLocation {
  storeID?: number;
  storeTypeID?: number;
  deptID?: number;
  swhlName?: string;
  swhlNotes?: string;
  swhlActive?: boolean;
  isMain?: boolean;
  isMedicineStore?: boolean;
  isUtilStore?: boolean;
  isChemicalStore?: boolean;
  refStorageWarehouseType?: RefStorageWarehouseType;
  refDepartment?: RefDepartment;
  isSubStorage?: boolean;
  listV_MedProductType?: string;
}

export interface GetAllStoragesNotPagingRequest {
  type?: number,
  bNo?: boolean,
  deptID?: number,
  isNotSubStorage?: boolean,
}