import { setEditDrug, toggleSubmitForm } from "../reducer/drugManagementReducer";
import pharmacyManagementService from "@core/services/pharmacyManagementService";

export const getEditDrug = (drugId: number) : any => async (dispatch) => {
  const res = (await pharmacyManagementService.getDrugByID(drugId)) as any
  dispatch(setEditDrug(res));
  dispatch(toggleSubmitForm(true));
}