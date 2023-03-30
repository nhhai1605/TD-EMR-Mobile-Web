// import { RefGenericDrugDetail } from '../pharmacy/refGenericDrugDetail';
import { ChooseDose } from './chooseDose';
import { PrescriptionDetailSchedules } from './prescriptionDetailSchedules';

export type PrescriptionDetail = {
  prescriptDetailID?: number;
  drugID?: number;
  prescriptID?: number;
  strength?: string;
  beOfHIMedicineList?: boolean;
  v_DrugUsage?: number;
  v_DrugType?: number;
  mDose?: number;
  aDose?: number;
  eDose?: number;
  nDose?: number;
  v_Units?: number;
  dayRpts?: number;
  dayExtended?: number;
  realDay?: number;
  qty?: number;
  qtyMaxAllowed?: number;
  qtyForDay?: number;
  qtySchedMon?: number;
  qtySchedTue?: number;
  qtySchedWed?: number;
  qtySchedThu?: number;
  qtySchedFri?: number;
  qtySchedSat?: number;
  qtySchedSun?: number;
  schedBeginDOW?: number;
  drugInstructionNotes?: string;
  objPrescriptionDetailSchedules?: PrescriptionDetailSchedules[];
  hasSchedules?: boolean;
  appointmentID?: number;
  issueID?: number;
  isAllowEditNDay?: boolean;
  refGenDrugCatID_1?: number;
  brandName?: string;
  usageNote?: string;
  content?: string;
  unitName?: string;
  unitUse?: string;
  administration?: string;
  isDrugNotInCat?: boolean;
  //refGenericDrugDetail?: RefGenericDrugDetail;
  isContraIndicator?: boolean;
  repeat?: number;
  realQty?: number;
  isInsurance?: boolean;
  dosage?: number;
  dosageStr?: string;
  mDoseStr?: string;
  aDoseStr?: string;
  eDoseStr?: string;
  nDoseStr?: string;
  selectedDrugForPrescription?: GetDrugForSellVisitor;
  insuranceCover?: boolean;
  chooseDose?: ChooseDose;
  isHICheck?: boolean;
  isEditDosage?: boolean;
  index?: number;
  isNeedToUse?: boolean;
  isSave?: boolean;
  drugTypeNecessary?: boolean;
  drugTypeCalendar?: boolean;
  dispenseVolume?: number;
  totalDay?: number;
  genericName?:string;
  remaining?: number;
};

export interface GetDrugForSellVisitor {
  inputValue?: string;
  remaining?: number;
  requiredNumber?: number;
  drugID?: number;
  brandName?: string;
  genericID?: number;
  genericName?: string;
  inBatchNumber?: string;
  unitName?: string;
  sellingPrice?: number;
  inCost?: number;
  outPrice?: number;
  normalPrice?: number;
  priceForHIPatient?: number;
  hiAllowedPrice?: number;
  hiAllowedPriceNoChange?: number;
  sTT?: number;
  inID?: number;
  unitUse?: string;
  dosage?: string;
  insuranceCover?: boolean;
  isConsult?: boolean;
  dispenseVolume?: number;
  unitVolume?: number;
  maxDayPrescribed?: number;
  isSearchByGenName?: boolean;
  hiPaymentPercent?: number;
  hiRemaining?: number;
  indication?: string;
  drugClassID?: number;
  drugClassName?: string;
  vat?: number;
  isNotVat?: boolean;
  drugVersionID?: number;
  bH?: boolean;
  treatmentRegimenID?: number;
  packaging?: string;
  visa?: string;
  drugCode?: string;
  hIDrugCode?: string;
  sdlDescription?: string;
  content?: string;
  administration?: string;
  inExpiryDate?: string;
  remainingFirst?: number;
  qty?: number;
  dayRpts?: number;
  qtyForDay?: number;
  prescriptID?: number;
  issueID?: number;
  issuedDateTime?: string;
  checked?: boolean;
  drugIDChanged?: number;
  precaution_Warn?: string;
  isWarningHI?: boolean;
  v_DrugType?: number;
  qtyMaxAllowed?: number;
  qtySchedMon?: number;
  qtySchedTue?: number;
  qtySchedWed?: number;
  qtySchedThu?: number;
  qtySchedFri?: number;
  qtySchedSat?: number;
  qtySchedSun?: number;
  schedBeginDOW?: number;
}
