import { CitiesProvince, SuburbNames, WardNames } from '@core/models/reference/refCountry';
import { createSlice } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
  name: 'addressSlice',
  initialState: {
    citiesProvinces: [] as CitiesProvince[],
    suburbNames: [] as SuburbNames[],
    wardNames: [] as WardNames[],
  },
  reducers: {
    getProvinceSuccess(state, action) {
      state.citiesProvinces = action.payload;
    },
    getSuburbNameSuccess(state, action) {
      state.suburbNames = action.payload;
    },
    getWardNamesSuccess(state, action) {
      state.wardNames = action.payload;
    },
  },
  extraReducers: {},
});

export default addressSlice.reducer;
