import { PaymentMode, V_PurchaseOrderStatus } from "../enums/emrEnum";
import { PharmacyEstimationForPO } from "../estimate/pharmacyEstimationForPO";
import { Lookup } from "../reference/lookup";
import { Supplier } from "../resources";
import { Staff } from "../staff";
import { RefGenericDrugDetail } from "./refGenericDrugDetail";
import { RefShelfDrugLocation } from "./refShelfDrugLocation";

export interface PharmacyPurchaseOrder {
  pharmacyEstimatePoID?: number,
  supplierID?: number,
  orderDate?: Date,
  poNumber?: number,
  staffID?: number,
  currencyID?: number,
  exchangeRates?: number,
  vat?: number,
  isForeign?: boolean, 
  isTrongNuoc?: boolean,
  purchaseOrderDetails?: PharmacyPurchaseOrderDetail[],
  deliveryDayNo?: number,
  deliveryMoneyDayNo?: number,
  selectedStaff?: Staff,
  selectedSupplier?: Supplier,
  canPrint?: boolean,
  canDelete?: boolean,
  canSave?: boolean,
  canWaiting?: boolean,
  canNew?: boolean,
  poNotes?: boolean,
  deliveryDate?: Date,
  expectedDeliveryDate?: Date,
  recDateCreated?: Date,
  pharmacyPoID?: number,
  pharmacyEstimationForPO?: PharmacyEstimationForPO
  v_PaymentMode?: PaymentMode,
  v_PurchaseOrderStatus?: V_PurchaseOrderStatus
}

export interface PharmacyPurchaseOrderDetail {
  inQty?: number,
  inBatchNumber?: string,
  inProductionDate?: Date,
  inExpiryDate?: Date,
  sdlID?: number,
  sdlDescription?: string,
  selectedShelfDrugLocation?: RefShelfDrugLocation 
  totalPriceNotVAT?: number,
  discounting?: number,
  discountingByPercent?: number,
  isPercent?: boolean,
  noPrint?: boolean,
  isUnitPackage?: boolean,
  noWaiting?: boolean,
  inQuantity?: number,
  packageQuantity?: number,
  isNotVat?: boolean,
  refGenericDrugDetail?: RefGenericDrugDetail
  pharmacyPoDetailID?: number,
  pharmacyPoID?: number,
  poNumber?: number,
  drugCode?: string,
  drugID?: number,
  canWaiting?: boolean,
  poPackageQty?: number,
  poUnitQty?: number,
  waitingDeliveryQty?: number,
  orderedQty?: number,
  unitPrice?: number,
  packagePrice?: number,
  poNotes?: string,
  poTotalPriceNotVAT?: number,
  estimateQty?: number,
  v_GoodsType?: Lookup,
  vat?: number
}