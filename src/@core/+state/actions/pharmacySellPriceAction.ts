import inwardDrugService from "@core/services/inwardDrugService";
import { pharmacySellPriceSlice } from "../reducer/pharmacySellPriceReducer";
const { getProfitScalesSuccess } = pharmacySellPriceSlice.actions

export const getProfitScales =
  (payload): any =>
  async (dispatch) => {
    const response: any = await inwardDrugService.loadPharmacySellPriceProfitScale(payload);
    if (response && response.data) {
      dispatch(getProfitScalesSuccess(response.data));
    }
  };
