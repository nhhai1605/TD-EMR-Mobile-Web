import { Supplier } from '../reference/resources';
import { RefGenericDrugDetail } from './refGenericDrugDetail';

export interface DrugDeptSupplier {
  genMedProductID?: number;
  supplierID?: number;
  supplierName?: string;
  address?: string;
  cityStateZipCode?: string;
  contactPerson?: string;
  supplierType?: number;
  telephoneNumber?: string;
  faxNumber?: string;
  pahEmailAddress?: string;
  webSiteAddress?: string;
  certificateAgency?: string;
  supplierDescription?: string;
  active?: boolean;
  isForeign?: boolean;
  accountNumber?: string;
  bankName?: string;
  supplierCode?: string;
  taxCode?: string;
  listPCOID?: string;
  supplierDrugDeptPharmOthers?: number;
  isAll?: boolean;
}

export interface DrugDeptPharmaceuticalCompany {
  pCOID?: number;
  pCOName?: string;
  pCOAddress?: string;
  pCOState?: string;
  pCOZipCode?: string;
  countryID?: number;
  countryName?: string;
  pCOTelephone?: string;
  contactName?: string;
  active?: boolean;
}

export interface SupplierGenericDrug {
  supGenDrugID?: number;
  supplierID?: number;
  drugID?: number;
  recDateCreated?: string;
  isMain?: boolean;
  unitPrice?: number;
  packagePrice?: number;
  vat?: number;
  selectedSupplier?: Supplier;
  selectedGenericDrug?: RefGenericDrugDetail;
}

