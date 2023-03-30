import { createSlice } from "@reduxjs/toolkit";

interface DepartmentLocationInfo {
  currentDepId: number,
  currentDepLocationId: number,
  departmentName: string,
  locationName: string
}

const initialState : { scheduleData: Array<any>, currentDepInfo : DepartmentLocationInfo | null } = {
  scheduleData: [],
  currentDepInfo: null
}

export const dotorScheduleSlide = createSlice({
  name: 'dotorScheduleSlide',
  initialState,
  reducers: {
    setScheduleData(state, action) {
      state.scheduleData = action.payload;
    },
    setCurrentDep(state, action) {
      state.currentDepInfo = action.payload;
    },
    resetScheduleState(state) {
      state.scheduleData = [];
      state.currentDepInfo = null;
    }
  }
})

export const { setScheduleData, setCurrentDep, resetScheduleState } = dotorScheduleSlide.actions

export default dotorScheduleSlide.reducer;