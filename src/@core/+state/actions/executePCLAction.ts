import { toggleMessage } from '@core/contexts/SnackbarProvider';
import { V_PCLRequestStatusEnum } from '@core/models/enums/vPCLRequestStatus';
import paraclinicalLaboratoryService from '@core/services/paraclinicalLaboratoryService';
import moment from 'moment';
import { executePCLSlide } from '../reducer/executePCLReducer';
const {
  getPatientPCLImageRequestSuccess,
  getPatientPCLTestRequestSuccess,
  getPatientAwaitingPCLImageRequestSuccess,
  getPatientCompletePCLImageRequestSuccess,
} = executePCLSlide.actions;

export const getPatientPCLImageRequestAction =
  (payload): any =>
  async (dispatch) => {
    if (!payload) {
      dispatch(getPatientPCLImageRequestSuccess(undefined));
      return;
    }
    const response = await paraclinicalLaboratoryService
      .getPatientPCLRequestResultsByReqID(payload)
      .catch(() => dispatch(getPatientPCLImageRequestSuccess(undefined)));
    if (response) {
      dispatch(getPatientPCLImageRequestSuccess(response));
    } else {
      toggleMessage({
        type: 'error',
        message: 'Phiếu chỉ định không tồn tại',
      });

      dispatch(getPatientPCLImageRequestSuccess(undefined));
    }
  };

export const getPatientPCLTestRequestAction =
  (payload): any =>
  async (dispatch) => {
    if (!payload) {
      dispatch(getPatientPCLTestRequestSuccess(undefined));
      return;
    }
    const response: any = await paraclinicalLaboratoryService
      .getPCLLaboratoryResults_With_ResultOld(payload)
      .catch(() => dispatch(getPatientPCLTestRequestSuccess(undefined)));
    if (response) {
      dispatch(getPatientPCLTestRequestSuccess(response.data));
    }
  };
export const getPatientAwaitingPCLImageRequestAction =
  (payload): any =>
  async (dispatch) => {
    const initPayload = {
      searchCriteria: {
        ...payload,
        v_Param: 0,
        patientFindBy: 0,
        patientCode: undefined,
        fullName: '',
        fromDate: moment().startOf('day'),
        toDate: moment().endOf('day'),
        pclExamTypeLocationsDeptLocationID: 0,
        orderBy: '',
        loaiDanhSach: 0,
        ptRegistrationID: 0,
        patientID: 0,
        patientPCLReqID: 0,
        hosClientID: 0,
        v_PCLRequestStatus: V_PCLRequestStatusEnum.OPEN,
      },
      pageIndex: 0,
      pageSize: 50,
      orderBy: '',
      countTotal: true,
    };
    const response: any = await paraclinicalLaboratoryService
      .getPatientPCLRequest(initPayload)
      .catch(() => dispatch(getPatientAwaitingPCLImageRequestSuccess(undefined)));
    if (response) {
      dispatch(getPatientAwaitingPCLImageRequestSuccess(response.data));
    }
  };

export const getPatientCompletePCLImageRequestAction =
  (payload): any =>
  async (dispatch) => {
    const initPayload = {
      searchCriteria: {
        ...payload,
        v_Param: 0,
        patientFindBy: 0,
        patientCode: undefined,
        fullName: '',
        fromDate: moment().startOf('day'),
        toDate: moment().endOf('day'),
        pclExamTypeLocationsDeptLocationID: 0,
        orderBy: '',
        loaiDanhSach: 0,
        ptRegistrationID: 0,
        patientID: 0,
        patientPCLReqID: 0,
        hosClientID: 0,
        v_PCLRequestStatus: V_PCLRequestStatusEnum.CLOSE,
      },
      pageIndex: 0,
      pageSize: 50,
      orderBy: '',
      countTotal: true,
    };

    const response: any = await paraclinicalLaboratoryService
      .getPatientPCLRequest(initPayload)
      .catch(() => dispatch(getPatientCompletePCLImageRequestSuccess(undefined)));
    if (response) {
      dispatch(getPatientCompletePCLImageRequestSuccess(response.data));
    }
  };
