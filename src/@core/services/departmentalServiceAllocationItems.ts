import { DeptMedServiceItems } from './../models/price/medServiceItemPrice';
import { RefMedicalServiceItem } from './../models/appointments/patientApptServiceDetails';
import { GetDeptMedServiceItems_DeptIDPagingRequest } from '@core/models/param-classes/configuration/getDeptMedServiceItemsDeptIDPagingRequest';
import { GetMedServiceItems_PagingRequest } from '@core/models/param-classes/configuration/getMedServiceItems_PagingRequest';
import internalApiService from './base/internalApiService';
import { RefMedicalServiceItemsSearchCriteria } from '@core/models/param-classes/configuration/refMedicalServiceItemsSearchCriteria';
import { PagedData } from '@core/models/common/searchCriteria';
import { DeptLocMedServices_XMLInsertRequest } from '@core/models/param-classes/configuration/deptLocMedServicesXMLInsertRequest';

class DepartmentalServiceAllocationItems {
  // DS cac dich vu
  getAllMedicalServiceTypes(): Promise<PagedData<RefMedicalServiceItem>> {
    return internalApiService.postAsync('Configuration/MedServiceItemPrice/GetAllMedicalServiceTypes_SubtractPCL');
  }

  //Load DS dich vu
  getMedServiceItems(payload): Promise<PagedData<GetMedServiceItems_PagingRequest>> {
    const request = payload;
    return internalApiService.postAsync('Configuration/MedServiceItemPrice/GetMedServiceItems_Paging', request);
  }

  //load DS Dich Vu khi chon Phong
  getRefMedicalServiceItemsInDeptLoc(payload): Promise<PagedData<RefMedicalServiceItemsSearchCriteria>> {
    return internalApiService.postAsync(
      'Configuration/RefMedicalServiceItem/RefMedicalServiceItems_In_DeptLocMedServices',
      payload
    );
  }

  //Tim kiem Dv
  getDeptMedServiceItems(payload: GetDeptMedServiceItems_DeptIDPagingRequest) {
    return internalApiService.postAsync('Configuration/RefMedicalServiceItem/GetDeptMedServiceItems_DeptIDPaging', payload);
  }

  //Luu Dv vo khoa
  // saveDeptMedServiceItems_InsertXML(lstDeptMedServiceItems): Promise<PagedData<DeptMedServiceItems>> {
  //   return internalApiService.postAsync(
  //     'Configuration/RefMedicalServiceItem/DeptMedServiceItems_InsertXML',
  //     lstDeptMedServiceItems
  //   );
  // }

  //Luu Dv cua khoa vo phong
  saveDeptLocMedServices_XMLInsert(request): Promise<DeptLocMedServices_XMLInsertRequest> {
    return internalApiService.postAsync('Configuration/RefMedicalServiceItem/DeptLocMedServices_XMLInsert', request);
  }

  //Xoa dv
  deleted(lstDeptMedServiceItems): Promise<DeptMedServiceItems> {
    return internalApiService.postAsync(
      'Configuration/RefMedicalServiceItem/DeptMedServiceItems_DeleteXML',
      lstDeptMedServiceItems
    );
  }
}

export default new DepartmentalServiceAllocationItems();
