import { RefMedicalServiceItem } from '@core/models/appointments/patientApptServiceDetails';
import { PagedData } from '@core/models/common/searchCriteria';
import { GetMedServiceItems_PagingRequest } from '@core/models/param-classes/configuration/getMedServiceItems_PagingRequest';
import internalApiService from './base/internalApiService';

class MedicalServiceItemService {
  getMedServiceItems(payload: GetMedServiceItems_PagingRequest): Promise<PagedData<RefMedicalServiceItem>> {
    return internalApiService.postAsync('Configuration/MedServiceItemPrice/GetMedServiceItems_Paging', payload);
  }

  getAllMedicalServiceTypes() {
    return internalApiService.postAsync('Configuration/MedServiceItemPrice/GetAllMedicalServiceTypes_SubtractPCL');
  }

  insert(payload: RefMedicalServiceItem) {
    const params = {
      refMedicalServiceItem: payload,
      staffID: 4022, //get from auth
    };
    return internalApiService.postAsync('Configuration/RefMedicalServiceItem/RefMedicalServiceItems_NotPCL_Insert', params);
  }

  update(payload: RefMedicalServiceItem) {
    const request = payload;
    return internalApiService.postAsync('Configuration/RefMedicalServiceItem/RefMedicalServiceItems_NotPCL_Update', request);
  }

  getHITransactionType() {
    return internalApiService.postAsync('Configuration/PCLExamType/HITransactionType_GetListNoParentID');
  }
}

export default new MedicalServiceItemService();
