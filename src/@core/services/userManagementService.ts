import internalApiService from './base/internalApiService';

class UserManagementService {
  getAllFunction() {
    return internalApiService.postAsync("UserManagement/GetAllFunction", 0);
  }

  getOperation(functionId: number) {
    return internalApiService.postAsync("UserManagement/GetOperation", functionId)
  }

  addOperation(payload) {
    return internalApiService.postAsync("UserManagement/AddOperation", payload);
  }
}

export default new UserManagementService();