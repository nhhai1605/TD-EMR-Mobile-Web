import { Location } from "@core/models/location"
import { RefDepartment } from "@core/models/refDepartment"
import { createSlice } from '@reduxjs/toolkit';

export const departmentSlice = createSlice({
  name: 'departmentSlice',
  initialState: {
    departments: [] as RefDepartment[],
    rooms: [] as Location[]
  },
  reducers: {
    getDepartmentSuccess(state, action) {
      state.departments = action.payload;
    },
    getRoomSuccess(state, action) {
      state.rooms = action.payload;
    }
  }
});

export default departmentSlice.reducer;
