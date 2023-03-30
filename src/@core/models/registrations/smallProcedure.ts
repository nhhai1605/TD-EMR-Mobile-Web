import { RefDepartment } from '../reference/refDepartment';
import { Staff } from './../staff';
import { PatientRegistrationDetail } from './patientRegistrationDetail';

export interface SmallProcedure {
  smallProcedureID?: number;
  procedureDateTime?: string;
  completedDateTime?: string;
  diagnosis?: string;
  procedureMethod?: string;
  narcoticMethod?: string;
  procedureDoctorStaffID?: number;
  procedureDoctorStaff?: Staff;
  procedureDoctorStaffID2?: number;
  procedureDoctorStaff2?: Staff;
  narcoticDoctorStaffID?: number;
  narcoticDoctorStaff?: Staff;
  narcoticDoctorStaffID2?: number;
  narcoticDoctorStaff2?: Staff;
  checkRecordDoctorStaffID?: number;
  checkRecordDoctorStaff?: Staff;
  nurseStaffID?: number;
  nurseStaff?: Staff;
  nurseStaffID2?: number;
  nurseStaff2?: Staff;
  nurseStaffID3?: number;
  nurseStaff3?: Staff;
  recCreatedDate?: string;
  createdStaffID?: number;
  modifiedDate?: string;
  modifiedStaffID?: number;
  ptRegDetailID?: number;
  patientID?: number;
  ptRegistrationID?: number;
  trinhTu?: string;
  v_RegistrationType?: number;
  v_Surgery_Tips_Type?: number;
  deptLocation?: number;
  notes?: string;
  dateOffStitches?: string;
  drainage?: string;
  v_DeathReason?: number;
  v_SurgicalMode?: number;
  v_CatactropheType?: number;
  v_AnesthesiaType?: number;
  beforeICD10?: DiseasesReference;
  afterICD10?: DiseasesReference;
  departmentName?: string;
  deptLocID?: number;
  procedureDescription?: string;
  procedureDescriptionContent?: string;
  serviceRecID?: number;
  patientRegistrationDetail?: PatientRegistrationDetail;
  externalDoctor?: string;
  department?: RefDepartment;
  procedureDoctorStaffListID?: string[];
  procedureDoctorStaff2ListID?: string[];
  dienCuc?: string;
  surgeryType?: SurgeryType;
  v_Prognosis?: number;
  hIRepResourceCode?: string;
  afterDiagnosiStr?: string;
  beforeDTItemID?: number;
  afterDTItemID?: number;
  hIRepResourceName?: string;
  rscrID?: number;
  reqOutTreatmentServID?: number;
  lastTimeUseResources?: string;
}

export interface SurgeryType {
  surgeryTypeCode?: string;
  surgeryTypeName?: string;
}

export interface DiseasesReference {
  idCode: number;
  deptID: number | null;
  parIDCode: number | null;
  staffID: number | null;
  icD10Code: string;
  diseaseNameVN: string;
  diseaseName: string;
  diseaseNotes: string;
  diagnosisFinal: string;
  isActive: boolean;
}
