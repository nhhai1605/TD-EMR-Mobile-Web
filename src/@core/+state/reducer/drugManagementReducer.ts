import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMedicalInsuranceCat: [],
  listFamilyTherapies: [],
  pageSize: 50,
  pageIndex: 0,
  totalRows: 0,
  searchResult: [],
  searchRequest: {
    criteria: {
      brandName: '',
      faid: 0,
      orderBy: 'DrugID',
      isActive: 0,
      isShow: 1,
      isconsult: 1
    },
    pageSize: 300
  },
  currentDrugEdit: null,
  openSubmitForm: false
}

const drugManagementReducer = createSlice({
  name: 'drugManagementSlice',
  initialState,
  reducers: {
    setMedicalInsuranceCategory(state, action) {
      state.listMedicalInsuranceCat = action.payload;
    },
    setListFamilyTherapies(state, action) {
      state.listFamilyTherapies = action.payload;
    },
    resetState(state) {
      state.listFamilyTherapies = [];
      state.listMedicalInsuranceCat = [];
      state.searchResult = [];
      state.pageIndex = 0;
    },
    setTotalRows(state, action) {
      state.totalRows = action.payload;
    },
    setCurrentRequest(state, action) {
      state.searchRequest = action.payload;
    },
    setEditDrug(state, action) {
      state.currentDrugEdit = action.payload != null
        ? {...action.payload, tlThanhToan: action.payload.tlThanhToan * 10}
        : null;
    },
    toggleSubmitForm(state, action) {
      state.openSubmitForm = action.payload;
    }
  }
})

export const {
  setMedicalInsuranceCategory,
  setListFamilyTherapies,
  resetState,
  setCurrentRequest,
  setEditDrug,
  toggleSubmitForm
} = drugManagementReducer.actions;
export default drugManagementReducer.reducer;