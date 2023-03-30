import { toggleLoading } from '@core/components/loading/LoadingScreen';
import service from '@core/services/userManagementService';
import { setAllFunction } from '../reducer/userManagementReducer';

export const getAllFunctionActions = () : any => async (dispatch) => {
  toggleLoading(true);

  try {
    const res = await service.getAllFunction();
    dispatch(setAllFunction(res));
  }
  catch (err) {
    console.log(err);
  }
  toggleLoading(false);
}