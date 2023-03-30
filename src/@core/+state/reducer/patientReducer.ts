import { patientInit } from '@core/models/patients/patientDashboard';
import { PatientExt } from '@core/models/patients/patientExt';
import { PatientRegistration } from '@core/models/patients/patientRegistration';
import { RefTreatmentRegimen } from '@core/models/reference/refTreatmentRegimen';

import { createSlice } from '@reduxjs/toolkit';

export const patientSlice = createSlice({
  name: 'patientSlice',
  initialState: {
    patientInfo: {} as PatientExt,
    patientDashboard: patientInit,
    patientRegistration: {} as PatientRegistration,
    patientDashboardActivated: false,
    searchingPatients: [],
    physicalExamination: undefined,
    patientLastHIRegistration : {} as PatientRegistration,
    patientLastRegistration : {} as PatientRegistration,
    patientForExamQueues: [],
    patientForExamPCLQueues: [],
    refTreatmentRegimensByICD10s: [] as RefTreatmentRegimen[],
  },
  reducers: {
    getPatientDashboardSuccess(state, action) {
      state.patientDashboard = action.payload;
    },
    getPatientRegistrationSuccess(state, action) {
      state.patientRegistration = action.payload;
    },
    getPatientInfoSuccess(state, action) {
      state.patientInfo = action.payload;
    },
    getPatientLastHIRegistrationSuccess(state, action) {
      state.patientLastHIRegistration = action.payload;
    },
    getPatientLastRegistrationSuccess(state, action) {
      state.patientLastRegistration = action.payload;
    },
    setPatientRegistrationSuccess(state, action) {
      state.patientRegistration = action.payload;
    },
    resetPatientInfoSuccess(state) {
      state.patientInfo = {} as PatientExt;
    },
    resetPatientDashboardSuccess(state) {
      state.patientDashboard = patientInit;
      state.patientRegistration = {} as PatientRegistration;
    },
    setPatientDashboardActivated(state, action) {
      state.patientDashboardActivated = action.payload;
    },
    getSearchingPatient(state, action) {
      state.searchingPatients = action.payload;
    },
    resetSearchingPatient(state) {
      state.searchingPatients = [];
    },
    getPhysicalExamination(state, action) {
      state.physicalExamination = action.payload;
    },
    resetPhysicalExaminationSuccess(state) {
      state.physicalExamination = undefined;
    },
    getPatientRegistrationQueue(state, action) {
      state.patientForExamQueues = action.payload;
    },
    getPatientRegistrationPCLQueue(state, action) {
      state.patientForExamPCLQueues = action.payload;
    },
    resetPatientRegistrationQueue(state) {
      state.patientForExamQueues = [];
      state.patientForExamPCLQueues = [];
    },
    getRefTreatmentRegimensAndDetailSuccess(state, action) {
      state.refTreatmentRegimensByICD10s = action.payload;
    }
  },
  extraReducers: {},
});

export default patientSlice.reducer;
