import { PatientPCLRequest } from '@core/models/registrations/patientPCLRequest';
import { createSlice } from '@reduxjs/toolkit';

export const executePCLSlide = createSlice({
  name: 'executePCLSlide',
  initialState: {
    patientPCLImageRequest: undefined as PatientPCLRequest,
    patientPCLTestRequest: undefined,
    pclImageAwaitingData: [],
    pclImageCompleteData: [],
    
  },
  reducers: {
    getPatientPCLImageRequestSuccess(state, action) {
      state.patientPCLImageRequest = action.payload;
    },
    getPatientPCLTestRequestSuccess(state, action) {
      state.patientPCLTestRequest = action.payload;
    },
    getPatientAwaitingPCLImageRequestSuccess(state, action) {
      state.pclImageAwaitingData = action.payload;
    },
    getPatientCompletePCLImageRequestSuccess(state, action) {
      state.pclImageCompleteData = action.payload;
    },
  },
  extraReducers: {},
});

export default executePCLSlide.reducer;
