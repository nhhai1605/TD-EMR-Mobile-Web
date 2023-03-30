import { PagedData } from '@core/models/common/searchCriteria';
import {
  AddPCLResultFileStorageDetailsRequest,
  GetPatientPCLImagingResultsByIDRequest,
  PCLLaboratoryResultsWithResultOldRequest,
} from '@core/models/param-classes/pcls/pclRequest';
import { PatientPCLRequest } from '@core/models/registrations/patientPCLRequest';
import internalApiService from './base/internalApiService';

class ParaclinicalLaboratoryService {
  getPatientPCLRequest(payload):Promise<PagedData<PatientPCLRequest>> {
    return internalApiService.postAsync('PCLs/PatientPCLRequest_SearchPaging', payload);
  }

  getResourcesForMedicalServicesListByTypeID(payload) {
    return internalApiService.postAsync('PCLs/GetResourcesForMedicalServicesListByTypeID', payload);
  }

  getPCLResultFileStoreDetails(payload) {
    return internalApiService.postAsync('PCLs/GetPCLResultFileStoreDetails', payload);
  }

  getPatientPCLImagingResultsByID(payload: GetPatientPCLImagingResultsByIDRequest) {
    return internalApiService.postAsync('PCLs/GetPatientPCLImagingResults_ByID', payload);
  }

  addPCLResultFileStorageDetails(payload: AddPCLResultFileStorageDetailsRequest) {
    return internalApiService.postAsync('PCLs/AddPCLResultFileStorageDetails', payload);
  }

  deletePatientPCLImagingResult(payload) {
    return internalApiService.postAsync('PCLs/DeletePatientPCLImagingResult', payload);
  }

  getPatientPCLRequestResultsByReqID(payload) {
    return internalApiService.postAsync('PCLs/GetPatientPCLRequestResultsByReqID', payload);
  }

  getPCLExamTypeSubCategoryByPCLMainCategory(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypeSubCategory_ByV_PCLMainCategory', payload);
  }

  getAllPCLResultParamImplementations(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLResultParamImplementations_GetAll', payload);
  }

  getPCLLaboratoryResults_With_ResultOld(payload: PCLLaboratoryResultsWithResultOldRequest) {
    return internalApiService.postAsync('PCLs/PCLLaboratoryResults_With_ResultOld', payload);
  }

  updatePatientPCLLaboratoryResultDetail(payload) {
    return internalApiService.postAsync('PCLs/UpdatePatientPCLLaboratoryResultDetail', payload);
  }

  getPatientPCLRequestSearchPaging(payload) {
    return internalApiService.postAsync('PCLs/PatientPCLRequest_SearchPaging', payload);
  }

}




export default new ParaclinicalLaboratoryService();

