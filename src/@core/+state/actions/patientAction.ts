import medicationExaminationService from '@core/services/medicationExaminationService';
import { patientSlice } from '@core/+state/reducer/patientReducer';
import patientService from '@core/services/patientService';
const {
  getPatientDashboardSuccess,
  resetPatientDashboardSuccess,
  getPatientRegistrationSuccess,
  getPatientInfoSuccess,
  getPatientLastHIRegistrationSuccess,
  getPatientLastRegistrationSuccess,
  resetPatientInfoSuccess,
  setPatientRegistrationSuccess,
  setPatientDashboardActivated,
  getSearchingPatient,
  resetSearchingPatient,
  getPhysicalExamination,
  resetPhysicalExaminationSuccess,
  getPatientRegistrationQueue,
  resetPatientRegistrationQueue,
  getPatientRegistrationPCLQueue,
  getRefTreatmentRegimensAndDetailSuccess
} = patientSlice.actions;

export const getPatientDashboardAction =
  (payload): any =>
  async (dispatch) => {
    const response = await medicationExaminationService.getGetDoctorDashboard(payload);
    if (response) {
      dispatch(getPatientDashboardSuccess(response));
    }
  };

export const getPatientRegistrationAction =
  (payload): any =>
  async (dispatch) => {
    const response = await medicationExaminationService.getPatientRegistration(payload);
    if (response) {
      dispatch(getPatientRegistrationSuccess(response));
    }
  };

export const getPatientInfoAction =
  (patientId: string): any =>
  async (dispatch) => {
    const response: any = await patientService.getPatientExtInfo(patientId);
    if (response) {
      dispatch(getPatientInfoSuccess(response.patientExt));
    }
  };

export const getPatientLastRegistrationAction =
  (patientId: string): any =>
  async (dispatch) => {
    const response: any = await patientService.getPatientExtInfo(patientId);
    if (response) {
      dispatch(getPatientLastRegistrationSuccess(response.lastRegistration));
    }
  };

export const getPatientLastHIRegistrationAction =
  (patientId: string): any =>
  async (dispatch) => {
    const response: any = await patientService.getPatientExtInfo(patientId);
    if (response) {
      dispatch(getPatientLastHIRegistrationSuccess(response.lastHIRegistration));
    }
  };

export const resetPatientInfoAction = (): any => async (dispatch) => {
  dispatch(resetPatientInfoSuccess());
};

export const resetPatientDashboardAction = (): any => async (dispatch) => {
  dispatch(resetPatientDashboardSuccess());
};

export const setPatientRegistrationAction =
  (payload): any =>
  async (dispatch) => {
    dispatch(setPatientRegistrationSuccess(payload));
  };

export const setPatientDashboardActivatedAction =
  (payload): any =>
  async (dispatch) => {
    dispatch(setPatientDashboardActivated(payload));
  };

export const getSearchingPatientAction =
  (payload): any =>
  async (dispatch) => {
    dispatch(getSearchingPatient(payload));
  };

export const resetSearchingPatientAction = (): any => async (dispatch) => {
  dispatch(resetSearchingPatient());
};

export const getPhysicalExaminationAction =
  (payload): any =>
  async (dispatch) => {
    const response = await patientService.getPhyExamByPtRegID(payload).catch(() => dispatch(getPhysicalExamination(undefined)));
    dispatch(getPhysicalExamination(response));
  };

  export const setPhysicalExaminationAction =
  (payload): any =>
  async (dispatch) => {
    dispatch(getPhysicalExamination(payload));
  };

export const resetPhysicalExaminationAction = (): any => async (dispatch) => {
  dispatch(resetPhysicalExaminationSuccess());
};

export const resetPatientRegistrationQueueAction = (): any => async (dispatch) => {
  dispatch(resetPatientRegistrationQueue());
};

export const getPatientRegistrationQueueAction =
  (payload): any =>
  async (dispatch) => {
    const response: any = await patientService.getPatientRegistrationQueue(payload);
    if (response && response.data) {
      dispatch(getPatientRegistrationQueue(response.data));
    }
  };

export const getPatientRegistrationPCLQueueAction =
  (payload): any =>
  async (dispatch) => {
    const response: any = await patientService.getPatientRegistrationQueue(payload);
    if (response && response.data) {
      dispatch(getPatientRegistrationPCLQueue(response.data));
    }
  };

  
export const getRefTreatmentRegimensAndDetailAction =
(payload): any =>
async (dispatch) => {
  const response: any = await medicationExaminationService.getRefTreatmentRegimensAndDetail(payload);
  if (response) {
    dispatch(getRefTreatmentRegimensAndDetailSuccess(response.data));
  }
};
