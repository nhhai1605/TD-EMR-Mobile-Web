import { PagedData } from '@core/models/common/searchCriteria';
import { Prescription } from '@core/models/consultation/prescription';
import { PatientServiceRecord } from '@core/models/registrations/patientServiceRecord';

export interface SaveAndUpdateDiagPreResponse {
  result: number;
  serviceRecID: number;
  outPrescription: Prescription;
  outError: string;
  dTItemID: number;
  smallProcedureID: number;
  versionNumberOut: number;
  returnVal: PagedData<PatientServiceRecord>;
}
