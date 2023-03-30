import internalApiService from './base/internalApiService';

class ParaclinicalManagementService {
  getPCL(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypesAndPriceIsActive_Paging', payload);
  }

  getPCLSubCat(id: number) {
    return internalApiService.postAsync(
      'Configuration/PCLExamType/PCLExamTypeSubCategory_ByV_PCLMainCategory',
      JSON.stringify(id)
    );
  }

  getResultParam(id: number) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLResultParamImplementations_GetAll', JSON.stringify(id));
  }

  getPCLSection() {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLSections_All');
  }

  getPCLForm(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLForms_GetList_Paging', payload);
  }

  getHITranType() {
    return internalApiService.postAsync('Configuration/PCLExamType/HITransactionType_GetListNoParentID');
  }

  markDeletePCL(id: number) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypes_MarkDelete', JSON.stringify(id));
  }

  addUpdateImg(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypes_Save_NotIsLab', payload);
  }

  addUpdateLab(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypes_Save_IsLab', payload);
  }

  getPCLExamTestItem(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTestItems_SearchPaging', payload);
  }

  getTestItemByTypeID(id: number) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTestItems_ByPCLExamTypeID', JSON.stringify(id));
  }
  
  addUpdateExamTest(payload) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTestItems_Save', payload);
  }
}

export default new ParaclinicalManagementService();
