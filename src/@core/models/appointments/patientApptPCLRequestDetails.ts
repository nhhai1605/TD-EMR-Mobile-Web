import { EntityStateEnum } from '../enums/entityState';
import { DeptLocation } from './deptLocation';
import { PCLExamType } from './pCLExamType';
import { PCLTimeSegment } from './pCLTimeSegment';

export interface PatientApptPCLRequestDetails {
  pCLReqItemID?: number;
  pclExamTypeID?: number;
  patientPCLReqID?: number;
  objPCLExamTypes?: PCLExamType;
  apptTimeSegmentID?: number;
  apptTimeSegment?: PCLTimeSegment;
  serviceSeqNum?: number;
  serviceSeqNumType?: number;
  deptLocID?: number;
  objDeptLocID?: DeptLocation;
  objDeptLocIDList?: DeptLocation[];
  entityState?: EntityStateEnum;
  clientContractSvcPtID?: number;
  packPCLReqDetailID?: number;
}
