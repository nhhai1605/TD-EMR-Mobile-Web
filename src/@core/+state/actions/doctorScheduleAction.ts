import { dotorScheduleSlide } from "../reducer/doctorScheduleReducer";
import service from "@core/services/doctorWorkScheduleService";
import { toggleLoading } from "@core/components/loading/LoadingScreen";

const { setScheduleData } = dotorScheduleSlide.actions;

export const getDoctorScheduleByDeplocation = (deptLocationID): any => async (dispatch) => {
  toggleLoading(true);
  const { data } = await service.getAllSchedule(deptLocationID) as any;
  toggleLoading(false);
  dispatch(setScheduleData(data));
}