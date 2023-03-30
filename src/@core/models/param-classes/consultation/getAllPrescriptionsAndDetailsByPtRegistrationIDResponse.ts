import { Prescription } from "@core/models/consultation/prescription";
import { PrescriptionDetail } from "@core/models/consultation/prescriptionDetail";


export interface GetAllPrescriptionsAndDetails_ByPtRegistrationIDResponse {
  data: Prescription[];
  detail: PrescriptionDetail[];
}
