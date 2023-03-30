import patientService from "@core/services/patientService";
import { departmentSlice } from "../reducer/departmentReducer";
const { getDepartmentSuccess, getRoomSuccess } = departmentSlice.actions;

export const getDepartmentAction = (): any => async (dispatch) => {
  const response: any = await  patientService.getAllDepartments()
  if (response && response.data) {
    dispatch(getDepartmentSuccess(response.data));
  }
};

export const getRoomAction = (deptID: number): any => async (dispatch) => {
  const response: any = await  patientService.getAllDeptLocationByDeptID({deptID})
  if (response && response.data) {
    const rooms = response.data.map((d)=>{
      return {...d?.location, deptLocationID: d?.deptLocationID}
    }) || []
    dispatch(getRoomSuccess(rooms));
  }
};