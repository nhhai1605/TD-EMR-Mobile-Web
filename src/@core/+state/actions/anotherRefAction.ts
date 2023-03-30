import anotherRefService from "@core/services/anotherRefService";
import { anotherRefSlice } from "../reducer/anotherRefReducer";
const { getAllStoragesSuccess, getAllCurrencySuccess } = anotherRefSlice.actions

export const getAllStoragesAction =
  (payload): any =>
  async (dispatch) => {
    const response: any = await anotherRefService.getAllStorages(payload).catch((e)=>{console.log(e?.message)});
    if (response && response.data) {
      dispatch(getAllStoragesSuccess(response.data));
    }
  };

export const getAllCurrencyAction =
  (payload): any =>
  async (dispatch) => {
    const response: any = await anotherRefService.getAllCurrency(payload).catch((e)=>{console.log(e?.message)});
    if (response && response.data) {
      dispatch(getAllCurrencySuccess(response.data));
    }
  };