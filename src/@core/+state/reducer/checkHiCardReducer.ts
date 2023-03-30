import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

type State = {
  cardCheckInfo: {
    cardNo: string,
    fullName: string,
    dateOfBirth: Date
  } | null,
  cardCheckResult: any | null,
  ignoreError: false,
  hiSetting: any | null
}

const initialState : State = {
  cardCheckInfo: null,
  cardCheckResult: null,
  ignoreError: false,
  hiSetting: null
}

const hiCardCheckReducer = createSlice({
  name: 'hiCardCheckSlice',
  initialState,
  reducers: {
    setHiCardCheckInfo (state, action) {
      state.cardCheckInfo = action.payload;
    },
    setCardCheckResult (state, action) {
      state.cardCheckResult = action.payload;
    },
    setIgnoreError(state, action) {
      state.ignoreError = action.payload;
    },
    setHiSetting(state, action) {
      state.hiSetting = action.payload;
    }
  }
})

export const { setHiCardCheckInfo, setCardCheckResult, setIgnoreError, setHiSetting } = hiCardCheckReducer.actions;
export default hiCardCheckReducer.reducer;
export const getHiCardCheckState = (state : RootState) => state.hiCardCheck;