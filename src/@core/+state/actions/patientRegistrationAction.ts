import patientRegistrationService from '@core/services/patientRegistrationService';
import { patientRegistrationSlice } from '../reducer/patientRegistrationReducer';
const {
  getPCLFormsSuccess,
  getPatientRegistrationFullSuccess,
  resetPatientRegistrationFullSuccess,
  getSearchingExaminationFullSuccess,
  resetSearchingExaminationFullSuccess,
  setIsPtInsuranceBenefitByServicesSuccess
} = patientRegistrationSlice.actions;

export const getPCLFormsAction =
  (payload): any =>
  async (dispatch) => {
    const response: any = await patientRegistrationService.getPCLForms(payload);
    if (response) {
      dispatch(getPCLFormsSuccess(response.data));
    }
  };

export const getPatientRegistrationFullAction =
  (payload): any =>
  async (dispatch) => {
    const response: any = await patientRegistrationService.getRegistration(payload);
    if (response) {
      dispatch(getPatientRegistrationFullSuccess(response));
    }
  };

export const setPatientRegistrationFullAction =
    (payload): any =>
        async (dispatch) => {
            dispatch(getPatientRegistrationFullSuccess(payload));
        };

export const resetPatientRegistrationFullAction = (): any => async (dispatch) => {
  dispatch(resetPatientRegistrationFullSuccess());
};

export const getSearchingExaminationAction =
  (payload): any =>
  async (dispatch) => {
    dispatch(getSearchingExaminationFullSuccess(payload));
  };

export const resetSearchingExaminationAction = (): any => async (dispatch) => {
  dispatch(resetSearchingExaminationFullSuccess());
};


export const setIsPtInsuranceBenefitAction =
  (ptRegDetailID: number): any =>
  async (dispatch) => {
    dispatch(setIsPtInsuranceBenefitByServicesSuccess(ptRegDetailID));
  };