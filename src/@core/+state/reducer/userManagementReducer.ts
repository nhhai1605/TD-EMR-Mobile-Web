import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type State = {
  listFunction: Array<any>,
  nodeIdsExpand: Array<string>
}

const initialState : State = {
  listFunction: [],
  nodeIdsExpand: []
}

export const userManagementSlice = createSlice({
  name: "userMangementSlice",
  initialState,
  reducers: {
    setAllFunction(state, action) {
      state.listFunction = action.payload
    },

    setNodeIdsExpand(state, action) {
      state.nodeIdsExpand = action.payload
    }
  }
})

export default userManagementSlice.reducer;

export const { setAllFunction, setNodeIdsExpand } = userManagementSlice.actions;

export const getUserManagementState = (state : RootState) => state.userManagement;