import { V_StaffCatType } from "@core/models/enums/staffCatTypeEnum";
import internalApiService from "./base/internalApiService";

class DoctorWorkScheduleService {
  getAllSchedule(deptLocationID) {
    return internalApiService.postAsync(`Appointment/GetAllSchedule`, deptLocationID);
  }

  getAllWorkShifts() {
    return internalApiService.postAsync('Configuration/TimeSegments/GetAllConsultationTimeSegments');
  }

  getAllDepartments(includeDelete: boolean) {
    return internalApiService.postAsync('Patient/GetAllDepartments', includeDelete);
  }

  getAllLocationByDep(deptLocationID: number) {
    return internalApiService.postAsync('Patient/GetDeptLocIDsByDeptID', { deptID: deptLocationID });
  }

  getAllDoctorStaffCategories() {
    return internalApiService.postAsync('Patient/GetRefStaffCategoriesByType', V_StaffCatType.BACSI)
  }

  getAllDoctor(staffCatId: number) {
    return internalApiService.postAsync('Patient/GetAllStaff', staffCatId)
  }

  saveWorkSchedule(payload:any) {
    return internalApiService.postAsync('Configuration/ClinicManagement/EditStaffConsultationTimeSegments', payload);
  }
}

export default new DoctorWorkScheduleService();