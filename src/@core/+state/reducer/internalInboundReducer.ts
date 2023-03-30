import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type InternalInboundInvoiceType = {
  warehouseName: string,
  warehouseId: number,
  staffName: string,
  totalPrice: number,
  note: string,
  listWard: Array<InternalInboundWardType>,
  outiID: number,
  typID: number
}

export type InternalInboundWardType = {
  code: string,
  name: string,
  unitName: string,
  manufactureDate: Date | null,
  batchNumber: string,
  expiredDate: Date | null,
  inboundQty: number,
  position: string,
  normalPrice: number,
  sellingPrice: number,
  hiPrice: number | null,
  hiCommitPrice: number | null,
  vat: number | null,
  outID: number,
  drugId: number,
  inID: number,
  drugVersionID: number
}

type internalInboundState = {
  invoiceInfo: null | InternalInboundInvoiceType,
  inboundDestination: {
    id: number,
    name: string
  } | null,
  savedInboundInvoiceInfo: {
    inboundCode: string,
    outboundCode: string,
  }
}

const initialState : internalInboundState = {
  invoiceInfo: null,
  inboundDestination: null,
  savedInboundInvoiceInfo: null
}

const internalInboundReducer = createSlice({
  name: 'internalInbound',
  initialState,
  reducers: {
    setInvoiceInfo(state, action) {
      state.invoiceInfo = action.payload;
    },
    setInboundDestination(state, action) {
      state.inboundDestination = action.payload;
    },
    setSavedInboundInvoiceInfo(state, action) {
      state.savedInboundInvoiceInfo = action.payload;
    },
    resetState(state) {
      state.invoiceInfo = null;
      state.inboundDestination = null;
      state.savedInboundInvoiceInfo = null;
    }
  }
})

export const { setInvoiceInfo, setInboundDestination, setSavedInboundInvoiceInfo, resetState } = internalInboundReducer.actions;
export default internalInboundReducer.reducer;
export const getInternalInboundState = (state: RootState) => state.internalInbound;