import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

type HiReportPreviewType = {
  general: Array<any>,
  drug: Array<any>,
  technicalServiceAndMedicalMaterial: Array<any>
}

type ConfirmHiReportState = {
  searchRequest: null | any,
  selectedRegistration: Array<any>,
  openModalInfo: boolean,
  openModalPreview: boolean,
  previewReportData: HiReportPreviewType | null,
  reportResultInfo: {
    totalCase: number,
    totalSuccess: number,
    errorGroupsFormat: Array<any>
  } | null
}

const initialState: ConfirmHiReportState = {
  searchRequest: null,
  selectedRegistration: [],
  openModalInfo: false,
  openModalPreview: false,
  previewReportData: null,
  reportResultInfo: null
}

const confirmHiReportReducer = createSlice({
  name: "confirmHiReportSlice",
  initialState,
  reducers: {
    setSearchRequest(state, { payload }) {
      state.searchRequest = payload;
    },

    setSelectedData(state, { payload }) {
      state.selectedRegistration = payload;
    },

    toggleModal(state, { payload }) {
      state.openModalInfo = payload;
    },

    toggleModalPreview(state, { payload }) {
      state.openModalPreview = payload;
    },

    setPreviewReportData(state, { payload }) {
      state.previewReportData = payload;
    },

    setReportResultInfo(state, { payload }) {
      state.reportResultInfo = payload;
    }
  }
})

export const {
  setSearchRequest,
  setSelectedData,
  toggleModal,
  toggleModalPreview,
  setPreviewReportData,
  setReportResultInfo
} = confirmHiReportReducer.actions
export default confirmHiReportReducer.reducer;

export const getConfirmHiReportState = (state: RootState) => state.confirmHiReport;