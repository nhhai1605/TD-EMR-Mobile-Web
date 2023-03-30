import { toggleLoading } from "@core/components/loading/LoadingScreen"
import { setCardCheckResult, setHiCardCheckInfo, setHiSetting } from "../reducer/checkHiCardReducer"
import service from "@core/services/healthInsuranceService";

export const checkHiCard = (payload) : any => async (dispatch) => {
  dispatch(setHiCardCheckInfo(payload))

  if(!payload.cardNo) return null;

  toggleLoading(true);
  const res = await service.checkHiCardNo(payload);
  toggleLoading(false);

  dispatch(setCardCheckResult(res));

  return res;
}

export const getHospitalSetting = () : any => async (dispatch) => {
  toggleLoading(true);
  try {
    const res = await service.getHospitalSetting();
    dispatch(setHiSetting(res));
  }
  catch(err) {
    console.log(err);
  }
  finally {
    toggleLoading(false);
  }
}