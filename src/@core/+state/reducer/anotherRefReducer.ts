import { Currency } from '@core/models/pharmacy/currency';
import { RefStorageWarehouseLocation } from '@core/models/pharmacy/refShelfDrugLocation';
import { createSlice } from '@reduxjs/toolkit';

export const anotherRefSlice = createSlice({
  name: 'pharmacySellPriceSlice',
  initialState: {
    storages: [] as RefStorageWarehouseLocation[],
    currency: [] as Currency[]
  },
  reducers: {
    getAllStoragesSuccess(state, action) {
      state.storages = action.payload;
    },
    getAllCurrencySuccess(state, action) {
      state.currency = action.payload;
    },
  },
  extraReducers: {},
});
export default anotherRefSlice.reducer;
