import { PaymentMode } from "../enums/emrEnum"
import { RegistrationTypeEnum } from "../enums/registrationType"

export interface OutPtTransactionFinalization {
  ptRegistrationID: number,
  staffID?: number,
  taxMemberName?: string,
  taxMemberAddress?: string,
  taxCode?: string,
  v_PaymentMode?: PaymentMode,
  bankAccountNumber?: string,
  denominator?: string,
  symbol?: string,
  invoiceNumb?: null,
  v_RegistrationType: RegistrationTypeEnum 
}

export interface AddOutPtTransactionFinalizationRequest {
  transactionFinalizationObj: OutPtTransactionFinalization,
  isUpdateToken: boolean,
  viewCase: number,
  isFromUnfinishRegistration: boolean,
  outPtGeneralFinalizationID?: number,
  isSettlement: boolean
}
export interface DeleteTransactionFinalizationRequest {
  ptRegistrationID: number,
  staffID: number,
  v_RegistrationType: RegistrationTypeEnum
}