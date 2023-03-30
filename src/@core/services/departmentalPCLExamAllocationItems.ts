import {
  PCLExamTypeLocations_ByDeptLocationIDRequest,
  PCLExamTypeLocations_MarkDeletedRequest,
  PCLExamTypeLocations_XMLInsertRequest,
} from './../models/param-classes/pcls/pCLExamTypesListPagingRequest';
import internalApiService from './base/internalApiService';
import { PCLExamTypes_List_PagingRequest } from '@core/models/param-classes/pcls/pCLExamTypesListPagingRequest';
import { PagedData } from '@core/models/common/searchCriteria';
import { RefDepartments_Tree_ByDeptIDRequest } from '@core/models/param-classes/configuration/refDepartmentsTreeByDeptIDRequest';

class DepartmentalPCLExamAllocationItems {
  // DS cac Loai CLS
  getPCLExamTypes(payload): Promise<PCLExamTypes_List_PagingRequest> {
    const request = payload;
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypes_List_Paging', request);
  }

  // get List Department
  getRefDepartmentsTreeByDeptID(payload): Promise<RefDepartments_Tree_ByDeptIDRequest> {
    const request = payload;
    return internalApiService.postAsync('Configuration/RefMedicalServiceItem/RefDepartments_Tree_ByDeptID', request);
  }

  //get Room by Department
  getDeptLocationByDeptID(DeptID: number) {
    return internalApiService.postAsync('Configuration/RefMedicalServiceItem/GetDeptLocation_ByDeptID', DeptID);
  }

  //load list PCLExam by room
  getPCLExamTypeLocationsByDeptLocationID(payload): Promise<PagedData<PCLExamTypeLocations_ByDeptLocationIDRequest>> {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypeLocations_ByDeptLocationID', payload);
  }

  //Save
  onSavingPCLExamTypeLocationsXMLInsert(request): Promise<PagedData<PCLExamTypeLocations_XMLInsertRequest>> {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypeLocations_XMLInsert', request);
  }

  //deleted
  onDeletedPCLExamTypeLocationsMarkDeleted(request): Promise<PCLExamTypeLocations_MarkDeletedRequest> {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypeLocations_MarkDeleted', request);
  }
}

export default new DepartmentalPCLExamAllocationItems();
