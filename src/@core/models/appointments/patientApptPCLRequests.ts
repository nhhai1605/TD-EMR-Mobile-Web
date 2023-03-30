import { EntityStateEnum } from '../enums/entityState';
import { Staff } from '../staff';
import { PatientApptPCLRequestDetails } from './patientApptPCLRequestDetails';

export interface PatientApptPCLRequests {
  patientPCLReqID?: number;
  appointmentID?: number;
  reqFromDeptLocID?: number;
  reqFromDeptLocIDName?: string;
  doctorComments?: string;
  pclRequestNumID?: string;
  staffID?: number;
  objStaffID?: Staff;
  diagnosis?: string;
  apptPCLNote?: string;
  v_PCLMainCategory?: number;
  objPatientApptPCLRequestDetailsList?: PatientApptPCLRequestDetails[];
  entityState?: EntityStateEnum;
  iCD10List?: string;
  packPCLReqID?: number;
}
