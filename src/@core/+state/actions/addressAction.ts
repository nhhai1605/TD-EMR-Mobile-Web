import addressService from '@core/services/addressService';
import { addressSlice } from '../reducer/addressReducer';
const { getProvinceSuccess,getSuburbNameSuccess, getWardNamesSuccess} = addressSlice.actions;

export const getProvinceAction = (): any => async (dispatch) => {
  const response: any = await addressService.getAllProvinces();
  if (response && response.data) {
    const cities = response.data.map(o=>  ({
      cityProviceHICode : String(Number(o.cityProviceHICode)), //Remove empty space in string
      cityProvinceID: o.cityProvinceID,
      cityProvinceName: o.cityProvinceName,
    }))
    dispatch(getProvinceSuccess(cities));
  }
};

export const getSuburbNameAction = (): any => async (dispatch) => {
  const response: any = await addressService.getAllSuburbNames();
  if (response && response.data) {
    dispatch(getSuburbNameSuccess(response.data));
  }
};

export const getWardNamesAction = (): any => async (dispatch) => {
  const response: any = await addressService.getAllWardNames();
  if (response && response.data) {
    dispatch(getWardNamesSuccess(response.data));
  }
};