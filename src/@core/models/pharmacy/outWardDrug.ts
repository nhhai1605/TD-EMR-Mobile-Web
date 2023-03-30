import { MedRegItemBase } from '../appointments/medRegItemBase';
import { GetDrugForSellVisitor, PrescriptionDetail } from '../consultation/prescriptionDetail';
import { ExamRegStatusEnum } from '../enums/examRegStatus';
import { RefGenericDrugDetail } from './refGenericDrugDetail';
import { InwardDrug } from './inwardDrug';
import { RefGenMedProductDetails } from './refGenMedProductDetails';
import { V_OutDrugInvStatus } from "../enums/emrEnum";
import { PrescriptionIssueHistory } from '../consultation/prescriptionIssueHistory';
export interface OutwardDrug extends MedRegItemBase, OutwardDrugUIExtend {
  id?: number;
  outID?: number;
  inBatchNumber?: string;
  outiID?: number;
  drugID?: number;
  inID?: number;
  outQuantity?: number;
  totalPrice?: number;
  outNotes?: string;
  outAmount?: number;
  outAmountCoPay?: number;
  outHIRebate?: number;
  v_DrugType?: number;
  hiPaymentPercent?: number;
  getDrugForSellVisitor?: GetDrugForSellVisitor;
  refGenericDrugDetail?: RefGenericDrugDetail;
  prescriptionIssueCode?: string;
  icd10List?: string;
  prescriptionGroupString?: string;
  genMedProductItem?: RefGenMedProductDetails;
  prescriptionDetailObj?: PrescriptionDetail;
  doseString?: string;
  inCost?: number;
  vat?: number;
  drugVersionID?: number;
  isUpdate?: boolean;
  inIDOld?: number;
  fromOutID?: number;
  checked?: boolean;
  dayRpts?: number;
  qtyForDay?: number;
  qtyMaxAllowed?: number;
  qtySchedMon?: number;
  qtySchedTue?: number;
  qtySchedWed?: number;
  qtySchedThu?: number;
  qtySchedFri?: number;
  qtySchedSat?: number;
  qtySchedSun?: number;
  schedBeginDOW?: number;
  dispenseVolume?: number;
  normalPrice?: number;
  hi?: boolean;
  outQuantityOld?: number;
  outQuantityReturn?: number;
  qtyReturned?: number;
  qtyOffer?: number;
  totalPriceReturn?: number;
  outHIRebateReturn?: number;
  inExpiryDate?: string;
  sdlDescription?: string;
  patientReturn?: number;
  stt?: number;
  isLoad?: number;
  isNotVat?: boolean;
  prescriptID?: number;
  issueID?: number;
  chargeableItemName?: string;
  inwardDrug?: InwardDrug;
  examRegStatus?: ExamRegStatusEnum;
  outPrice?: number;
  remaining?: number;
  exportVersion?: any;
  outInvID: string,
  issuedDateTime: string,
  outInvoiceNumber: string,
  v_OutDrugInvStatus: V_OutDrugInvStatus, 
  selectedPrescription: PrescriptionIssueHistory,
  typID?: number;
}


interface OutwardDrugUIExtend {
  /**
   * true: Khi cập nhật ngày dùng thuốc được extend từ BH qua DV
   */
  isExtend?: boolean;
  /**
   * true: Khi thêm mới thuốc DV. dùng để merge số lượng xuất nếu đã tồn tại dòng xuất trước đó cùng inID
   */
  isMerged?: boolean;
  /**
   * Để biết dòng xuất thuốc này được extend ra từ toa thuốc nào trước đó.
   */
  rootPrescriptID?:number;
  /**
   * Để biết dòng xuất thuốc này được extend ra từ dịch vụ nào trước đó.
   */
  outPtRegDetailID?: number;
}