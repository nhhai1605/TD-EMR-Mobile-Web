import { PharmacySellPriceProfitScale } from '@core/models/price/pharmacySellPriceProfitScale';
import { createSlice } from '@reduxjs/toolkit';

export const pharmacySellPriceSlice = createSlice({
  name: 'pharmacySellPriceSlice',
  initialState: {
    profitScales: [] as PharmacySellPriceProfitScale[],
  },
  reducers: {
    getProfitScalesSuccess(state, action) {
      state.profitScales = action.payload;
    },
  },
  extraReducers: {},
});
export default pharmacySellPriceSlice.reducer;
