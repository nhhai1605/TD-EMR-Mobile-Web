import { DeptLocation } from '../appointments/deptLocation';
import { MedRegItemBase } from '../appointments/medRegItemBase';
import { RefMedicalServiceItem } from '../appointments/patientApptServiceDetails';
import { ChargeableItemPrice } from '../chargeableItemPrice';
import { RefDepartment } from '../reference/refDepartment';
import { PatientProcedureSurgeryReport } from './patientProcedureSurgeryReport';

export interface PatientRegistrationDetail extends MedRegItemBase {
  ptRegDetailID?: number;
  serviceSeqNum?: number;
  serviceSeqNumType?: number;
  serviceSeqNumString?: string;
  ptRegistrationID?: number;
  deptLocID?: number;
  medServiceID?: number;
  medicalServiceTypeID?: number;
  markedAsDeleted?: boolean;
  serviceQty?: number;
  v_ExamRegStatus?: number;
  examRegStatusObject?: number;
  regStaffFullName?: string;
  serviceRecID?: number;
  diagDeptLocationName?: string;
  deptLocation?: DeptLocation;
  diagDoctorName?: string;
  regDetailCancelDate?: string;
  regDetailCancelStaffID?: number;
  refMedicalServiceItem?: RefMedicalServiceItem;
  inPatientBillingInvID?: number;
  isSelected?: boolean;
  isSetSeqNumManually?: boolean;
  chargeableItem?: ChargeableItemPrice;
  fromAppointment?: boolean;
  recCreatedDate?: string;
  medServiceName?: string;
  receiptNumber?: string;
  invoiceID?: string;
  intPtDiagDrInstructionID?: number;
  doctorStaffID?: number;
  medInstructionDate?: string;
  hiPaymentPercent?: number;
  reqDeptID?: number;
  treatment?: string;
  paymentPercent?: number;
  reasonChangeStatus?: string;
  staffChangeStatus?: number;
  dateChangeStatus?: string;
  diagnosis?: string;
  v_Ekip?: number;
  v_EkipIndex?: number;
  vATRate?: number;
  diagnosisDate?: string;
  appointmentID?: number;
  dateStarted?: string;
  dateEnded?: string;
  hosClientID?: number;
  hosClientContractID?: number;
  contractNo?: string;
  contractName?: string;
  companyName?: string;
  apptSvcDetailID?: number;
  consultationRoomStaffAllocID?: number;
  apptStartDate?: string;
  apptEndDate?: string;
  confimedForPreAndDischarge?: boolean;
  clientContractSvcPtID?: number;
  packServDetailID?: number;
  patientWaitStatus?: number;
  reqFromDeptID?: number;
  surgeryReportDetail?: PatientProcedureSurgeryReport;
  inPatientDeclareBillingID?: number;
  dTItemID?: number;
  patientServiceReqID?: number;
  isReported?: boolean;
  khoaTH?: number;
  departmentPerform?: RefDepartment;
  reqOutTreatmentServID?: number;
  cpoeCarryOutByStaffID?: number;
  cpoeCarryOutAtTime?: string;
  cPOEDrugStatus?: number;
  cPOETimeStop?: string;
  cPOETimeStopNotes?: string;
  ptRegDetailID_Modified?: number;
  checkForChanged?: boolean;
  patientTimeWaitting?: number;
  maskedHIAllowedPrice?: number;
  regStatus?: number;
  appointmentDate?: string;
  fullName?: string;
  patientCode?: string;
  deptLocationName?: string;
  patientStreetAddress?: string;
  dOBText?: string;
  hiCardNo?: string;
  normalPrice?: number;
  hiPayRatio?: number;
  hiApproved?: boolean; 
  totalPatientPaid?: number;
}
