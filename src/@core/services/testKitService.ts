import { GeneralSearchCriteria } from './../models/param-classes/configuration/generalSearchCriteria';
import { PCLExamTypeCombo } from './../models/reference/pCLExamTypeCombo';
import { pCLExamTypeSearchCriteria } from './../models/pclexam/pclexamtypes';
import internalApiService from './base/internalApiService';
import { PCLExamTypeCombo_SaveRequest } from '@core/models/param-classes/service-and-PCL/pCLExamTypeComboSaveRequest';

class testKitService {
  getListTestKit(payload: GeneralSearchCriteria): Promise<PCLExamTypeCombo> {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypeCombo_Search', payload);
  }

  getListTest(payload: pCLExamTypeSearchCriteria) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypes_List_Paging', payload);
  }

  edit(payload: number) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypeComboItems_ByComboID', payload);
  }

  send(payload: PCLExamTypeCombo_SaveRequest) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypeCombo_Save', payload);
  }

  delete(payload: number) {
    return internalApiService.postAsync('Configuration/PCLExamType/PCLExamTypeCombo_Delete', payload);
  }
}

export default new testKitService();
