import internalApiService from './base/internalApiService';

class clinicManagementService {
  getAllStaffs(payload) {
    return internalApiService.postAsync(`Patient/GetAllStaffs_FromStaffID`, JSON.stringify(payload));
  }

  getAllDepartments(payload) {
    return internalApiService.postAsync(`Patient/GetAllDepartments`, payload);
  }

  getAllLocations(payload) {
    return internalApiService.postAsync(`Patient/GetAllLocations`, payload);
  }
  
  getAllConsultationTimeSegments() {
    return internalApiService.postAsync(`Configuration/TimeSegments/GetAllConsultationTimeSegments`);
  }

  getConsultationRoomStaffAllocations(payload) {
    return internalApiService.postAsync(`Patient/ConsultationRoomStaffAllocationsGetAll_ForXML`, payload);
  }
}

export default new clinicManagementService();
