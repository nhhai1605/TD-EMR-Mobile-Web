import { Supplier } from '../reference/resources';
import { Currency } from './currency';
import { RefStorageWarehouseLocation } from './refShelfDrugLocation';

export interface InwardDrugInvoice {
  [x: string]: unknown;
  inviID?: number;
  outiID?: number;
  staffID?: number;
  supplierID?: number;
  invID?: string;
  invInvoiceNumber?: string;
  invDateInvoice?: Date;
  dsptModifiedDate?: Date;
  tempRequireUpdate?: boolean;
  customTax?: number;
  storeIDOut?: number;
  storeID?: number;
  currencyID?: number;
  exchangeRates?: number;
  isForeign?: boolean;
  isTrongNuoc?: boolean;
  notes?: string;
  discounting?: number;
  discountingByPercent?: number;
  isPercent?: boolean;
  checkedPoint?: boolean;
  pharmacySupplierPaymentReqID?: number;
  pharmacySupplierPaymentNotes?: string;
  typID?: number;
  canEditAndDelete?: boolean;
  canUpdate?: boolean;
  canEdit?: boolean;
  canAdd?: boolean;
  canPrint?: boolean;
  canPercentIsEnable?: boolean;
  selectedStaff?: number;
  selectedSupplier?: Supplier;
  selectedCurrency?: Currency;
  selectedStorageOut?: RefStorageWarehouseLocation;
  selectedStorage?: RefStorageWarehouseLocation;
  outInvID?: string;
  totalPriceNotVAT?: number;
  totalPriceNotVAT_Q?: number;
  differenceValue?: number;
  totalVATDifferenceAmount?: number;
  vatSearch?: number;
}

export interface InvoiceTotalPrice{
  tongCKTrenHoaDon: number;
  tongTienHoaDonCoThueNK: number;
  tongTienHoaDonCoVAT: number;
  tongTienSPChuaVAT: number;
  tongTienTrenSPDaTruCK: number;
  totalVATDifferenceAmount: number;
  ckTrenSP: number;
}