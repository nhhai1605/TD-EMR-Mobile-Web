import { ApptStatusEnum } from '../enums/apptStatus';
import { EntityStateEnum } from '../enums/entityState';
import { Patient } from '../patients/patient';
import { Staff } from '../staff';
import { HospitalClientContract } from './hospitalClientContract';
import { PatientApptPCLRequests } from './patientApptPCLRequests';
import { PatientApptServiceDetails } from './patientApptServiceDetails';

export interface Event {
  id?: string;
  title?: string;
  description?: string;
  start?: number;
  end?: number;
  color?: EventColor;
}

export const eventColors = ['primary', 'warning', 'error', 'success'] as const;

export type EventColor = typeof eventColors[number];

export interface PatientAppointment {
  appointmentID?: number;
  staffID?: number;
  staff?: Staff;
  doctorStaff?: Staff;
  doctorStaffID?: number;
  serviceRecID?: number;
  nDay?: number;
  patientID?: number;
  patient?: Patient;
  v_ApptStatus?: ApptStatusEnum;
  ptRegistrationID?: number;
  isHIAppt?: boolean;
  createdByInPtRegis?: boolean;
  recDateCreated?: Date;
  dateModified?: Date;
  apptDate?: Date;
  wPID?: number;
  medServiceNames?: string;
  entityState?: EntityStateEnum;
  hasChronicDisease?: boolean;
  allowPaperReferralUseNextConsult?: boolean;
  reasonToAllowPaperReferral?: string;
  patientApptServiceDetailList?: PatientApptServiceDetails[];
  objApptServiceDetailsList_Add?: PatientApptServiceDetails[];
  objApptServiceDetailsList_Update?: PatientApptServiceDetails[];
  objApptServiceDetailsList_Delete?: PatientApptServiceDetails[];
  patientApptPCLRequestsList?: PatientApptPCLRequests[];
  objApptPCLRequestsList_Add?: PatientApptPCLRequests[];
  objApptPCLRequestsList_Update?: PatientApptPCLRequests[];
  objApptPCLRequestsList_Delete?: PatientApptPCLRequests[];
  isCanEdit?: boolean;
  apptReqDoctorStaffID?: number;
  iCD10List?: string;
  isEmergInPtReExamApp?: boolean;
  hosClientContractID?: number;
  v_AppointmentType?: number;
  clientContract?: HospitalClientContract;
  endDate?: Date;
  outPtTreatmentProgramID?: number;
  appoimentStatus?: string;
  treatment?: string;
  locationName?: string;
  isApptFromTimeSlot?: boolean;
  paidTime?: Date;
  isInTreatmentProgram?: boolean;
  paidStaffID?: number;
  patientName?: string;
  patientCode?: string;
  isPaymentAppointment?: boolean;
  appNote?: string;
  apptPaymentStatus?: number
}
