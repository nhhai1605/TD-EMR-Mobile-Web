import { PatientApptPCLRequests } from "@core/models/appointments/patientApptPCLRequests";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { RootState } from "../store";

export type AppointmentServiceType = {
  start: Date,
  end: Date,
  service: {
    name: string,
    price: number,
    id: number
  },
  appointmentType: {
    name: string,
    id: number
  },
  depLocation: {
    name: string,
    id: number
  },
  doctorStaff: {
    name: string,
    id: number
  }
}

type AppointmentState = {
  appointmentService: AppointmentServiceType | null,
  openSearchPatient: boolean,
  isRefreshSearch: boolean,
  patientInfo: any | null,
  appointmentDate: Date | null,
  listCLS: Array<PatientApptPCLRequests>,
  editAppointmentId: number | null,
  createdAppointmentId: number | null,
  clsEdit: {
    deleteCLSIds: Array<number>
  },
  clsTime: {
    start: Date | null,
    end: Date | null
  },
  listAppointment: Array<any>,
  listExaminationForAppointment: Array<any>
}

const getNearest15minute = (addMinute? : number) => {
  const start = moment().set({
    hour: 8
  });
  const remainder = 15 - (start.minute() % 15);
  const dateTime = moment(start)
    .add(addMinute ? (addMinute + remainder) : remainder, "minutes")

  return dateTime.toDate();
}

const initialState: AppointmentState = {
  isRefreshSearch: false,
  openSearchPatient: false,
  patientInfo: null,
  appointmentDate: null,
  appointmentService: null,
  listCLS: [],
  editAppointmentId: null,
  createdAppointmentId: null,
  clsEdit: {
    deleteCLSIds: []
  },
  clsTime: {
    start: getNearest15minute(),
    end: getNearest15minute(60)
  },
  listAppointment: [],
  listExaminationForAppointment: []
}

const patientAppointmentReducer = createSlice({
  name: 'paitentAppointmentSlice',
  initialState,
  reducers: {
    toggleSearchPatientModal(state, action) {
      state.openSearchPatient = action.payload;
    },
    setPatientInfo(state, action) {
      state.patientInfo = action.payload;
    },
    setAppointmentDate(state, action) {
      state.appointmentDate = action.payload;
    },
    setAppointmentService(state, action) {
      state.appointmentService = action.payload;
    },
    resetState(state) {
      state.appointmentDate = null;
      state.appointmentService = null;
      state.listCLS = [];
      state.editAppointmentId = null;
      state.createdAppointmentId = null;
      state.clsEdit = {
        deleteCLSIds: []
      };
      state.clsTime = {
        start: getNearest15minute(),
        end: getNearest15minute(60)
      }
    },
    setListCLS(state, { payload }) {
      state.listCLS = payload;
    },
    setEditAppointmentId(state, action) {
      state.editAppointmentId = action.payload;
    },
    addDeleteCLSId(state, action) {
      state.clsEdit.deleteCLSIds = [...state.clsEdit.deleteCLSIds, action.payload];
    },
    clearDeleteCLSId(state) {
      state.clsEdit.deleteCLSIds = []
    },
    setCreatedAppointmentId(state, action) {
      state.createdAppointmentId = action.payload;
    },
    setClsTime(state, action) {
      state.clsTime = action.payload;
    },
    setListAppointment(state, action) {
      state.listAppointment = action.payload;
    },
    setListExaminationForAppointment(state, action) {
      state.listExaminationForAppointment = action.payload;
    },
    triggerSearch(state) {
      state.isRefreshSearch = !state.isRefreshSearch
    }
  }
})

export const {
  toggleSearchPatientModal,
  setPatientInfo,
  setAppointmentDate,
  setAppointmentService,
  resetState,
  setListCLS,
  setEditAppointmentId,
  addDeleteCLSId,
  setCreatedAppointmentId,
  setClsTime,
  clearDeleteCLSId,
  setListAppointment,
  setListExaminationForAppointment,
  triggerSearch
} = patientAppointmentReducer.actions;

export default patientAppointmentReducer.reducer;

export const getAppointmentState = (state: RootState) => state.patientAppointment;