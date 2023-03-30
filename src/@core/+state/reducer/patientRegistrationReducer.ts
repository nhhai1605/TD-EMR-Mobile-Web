import { createSlice, current } from '@reduxjs/toolkit';
import { RegistrationStatusEnum } from '@core/models/enums/registrationStatus';

export const patientRegistrationSlice = createSlice({
  name: 'patientRegistrationSlice',
  initialState: {
    pclForms: [],
    patientRegistrationFull: {} as any,
    examinations: [],
    isPtInsuranceBenefitByServices: false,
    isPatientRegistrationConfirmed: false,
  },
  reducers: {
    getPCLFormsSuccess(state, action) {
      state.pclForms = action.payload;
    },
    getPatientRegistrationFullSuccess(state, action) {
      const registration = action.payload;
      state.patientRegistrationFull = registration;
      state.isPatientRegistrationConfirmed =
        registration?.confirmHIStaffID > 0 ||
        registration?.v_RegistrationStatus == RegistrationStatusEnum.COMPLETED ||
        registration?.v_RegistrationStatus == RegistrationStatusEnum.REFUND;
    },
    resetPatientRegistrationFullSuccess(state) {
      state.patientRegistrationFull = {} as any;
    },
    getSearchingExaminationFullSuccess(state, action) {
      state.examinations = action.payload;
    },
    resetSearchingExaminationFullSuccess(state) {
      state.examinations = [];
    },
    /**
     * * Dùng để biết đang làm việc trên dịch vụ có BH hay không
     * @param state
     * @param action.payload = ptRegDetailID
     */
    setIsPtInsuranceBenefitByServicesSuccess(state, action) {
      const { patientRegistrationFull } = current(state);
      const currentRegDetail = patientRegistrationFull?.patientRegistrationDetails?.filter(
        (o) => o.ptRegDetailID === action.payload
      )[0];
      state.isPtInsuranceBenefitByServices = currentRegDetail?.hiBenefit > 0 && currentRegDetail?.hisID > 0;
    },
  },
  extraReducers: {},
});
export default patientRegistrationSlice.reducer;
