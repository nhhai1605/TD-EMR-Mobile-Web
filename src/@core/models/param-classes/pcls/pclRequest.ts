import { PCLExamType } from '@core/models/appointments/pCLExamType';
import { PatientPCLRequest } from '@core/models/registrations/patientPCLRequest';
import { Staff } from '@core/models/staff';

export interface GetPatientPCLImagingResultsByIDRequest {
  patientPCLReqID: number;
  pclExamTypeID: number;
  v_PCLRequestType: number;
}

export interface PCLLaboratoryResultsWithResultOldRequest {
  patientID: number;
  patientPCLReqID: number;
  v_PCLRequestType: number;
}

export interface GetPatientPCLImagingResultsByIDRequest {
  patientPCLReqID: number;
  pclExamTypeID: number;
  v_PCLRequestType: number;
}

export interface AddPCLResultFileStorageDetailsRequest {
  examResult?: PatientPCLImagingResult;
  resultFile?: any[];
  fileForDelete?: any[];
  fileForUpdate?: [];
  pclStorePool?: string;
}
//PCLResultFileStorageDetail

export interface PatientPCLImagingResult {
  templateResultFileName?: string;
  templateResultDescription?: string;
  templateResult?: string;
  ptRegistrationCode?: string;
  performStaffID?: number | null;
  performStaffFullName?: string;
  performedDate?: string;
  suggest?: string;
  resultStaffID?: number | null;
  resultStaffFullName?: string;
  signingByStaffType?: number;
  paramEnum?: number;
  pclResultParamImpID?: number;
  patientCode?: string;
  patientID?: number;
  ptRegDetailID?: number | null;
  doctor?: Staff;
  examDate?: string | null;
  v_ProcessingType?: number | null;
  processingType?: string;
  v_Behaving?: number | null;
  numberOfFilmsReceived?: number;
  templateResultString?: string;
  pclExamGroupID?: number;
  staff?: Staff;
  pclImgResultID?: number;
  staffID?: number | null;
  pclExtRefID?: number | null;
  patientPCLReqID?: number | null;
  v_PCLRequestType;
  pclExamTypeID?: number;
  agencyID?: number | null;
  pclExamDate?: string;
  diagnoseOnPCLExam?: string;
  pclExamForOutPatient?: boolean | null;
  behaving?: string;
  isExternalExam?: boolean | null;
  icd10List?: string;
  weight?: number;
  height?: number;
  bsa?: number;
  deptLocationID?: number | null;
  hIRepResourceCode?: string;
  patientPCLRequest?: PatientPCLRequest;
  pclExamType?: PCLExamType;
  resultExplanation?: string;
}
