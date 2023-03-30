import { RecordStateEnum } from '../enums/recordState';
import { DrugDeptSupplier } from './drugDeptSupplier';

export interface RefUnit {
  unitID?: number;
  unitCode?: string;
  unitName?: string;
  unitName_English?: string;
  unitActive?: boolean;
  unitVolume?: number;
}

export interface DrugClass {
  drugClassID?: number;
  parDrugClassID?: number;
  faName?: string;
  faDescription?: string;
  faActive?: boolean;
  drugClassCode?: string;
  v_MedProductType?: number;
}

export interface SupplierGenMedProduct {
  supGenMedID?: number;
  supplierID?: number;
  genMedProductID?: number;
  recDateCreated?: string;
  supplierPriorityOrderNum?: number;
  isMain?: boolean;
  staffID?: number;
  unitPrice?: number;
  packagePrice?: number;
  vAT?: number;
  selectedSupplier?: DrugDeptSupplier;
}

export interface BidDetail {
  bidDetailID?: number;
  bidID?: number;
  drugID?: number;
  versionID?: number;
  approvedVersionID?: number;
  isMedDept?: boolean;
  drugCode?: string;
  reportBrandName?: string;
  visa?: string;
  isDeleted?: boolean;
  bidName?: string;
  hICode?: string;
  groupCode?: string;
  bidCode?: string;
  content?: string;
  approvedQty?: number;
  isApproved?: boolean;
  remainingQty?: number;
  inQuantity?: number;
  supplier?: DrugDeptSupplier;
  inCost?: number;
  contractNo?: string;
  isEditable?: boolean;
  remainingOutQty?: number;
  unitName?: string;
  routeOfAdministration?: string;
  v_RouteOfAdministration?: number;
  recordState?: RecordStateEnum;
}
