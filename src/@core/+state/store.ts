import { combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './reducer/patientReducer';
import addressReducer from './reducer/addressReducer';
import patientRegistrationReducer from './reducer/patientRegistrationReducer';
import executePCLReducer from './reducer/executePCLReducer';
import doctorScheduleReducer from './reducer/doctorScheduleReducer';
import drugManagementReducer from './reducer/drugManagementReducer';
import patientAppointmentReducer from './reducer/patientAppointmentReducer';
import pharmacySellPriceReducer from './reducer/pharmacySellPriceReducer';
import anotherRefReducer from './reducer/anotherRefReducer';
import hiCardCheckReducer from './reducer/checkHiCardReducer';
import internalInboundReducer from './reducer/internalInboundReducer';
import departmentReducer from './reducer/departmentReducer';
import confirmHiReportReducer from './reducer/confirmHiReportReducer';
import userManagementReducer from './reducer/userManagementReducer';

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

const reducer = combineReducers({
  patient: patientReducer,
  patientRegistration: patientRegistrationReducer,
  address: addressReducer,
  executePCL: executePCLReducer,
  doctorWorkSchedule: doctorScheduleReducer,
  drugManagement: drugManagementReducer,
  patientAppointment: patientAppointmentReducer,
  pharmacySellPrice: pharmacySellPriceReducer,
  anotherRef: anotherRefReducer,
  hiCardCheck: hiCardCheckReducer,
  internalInbound: internalInboundReducer,
  department: departmentReducer,
  confirmHiReport: confirmHiReportReducer,
  userManagement: userManagementReducer
});

const store = configureStore({
  reducer,
  middleware: [thunkMiddleware],
});

export default store;

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
