import { V_OutDrugInvStatus } from "../enums/emrEnum";

export interface GetOutwardDrugServiceRequest {
  pageIndex?: number,
  pageSize?: number,
  customerName?: string,
  outInvID?: string,
  patientCode?: string,
  hICardCode?: string,
  fromDate?: Date,
  toDate?: Date,
  v_OutDrugInvStatus?: V_OutDrugInvStatus,
  isNotSolve?: boolean,
  ptRegistrationID?: number,
  bFlagStoreHI?: boolean,
  bFlagPaidTime?: boolean,
  bCountTotal?: boolean,
  storeID?: number
}