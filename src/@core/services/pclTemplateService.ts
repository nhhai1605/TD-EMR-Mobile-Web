
import internalApiService from './base/internalApiService';

class PCLTemplateService {
  getPCLExamResultTemplateGetByTypeID(pclExamGroupTemplateResultID) {
    return internalApiService.postAsync('PCLs/PCLResultTemplate/PCLExamResultTemplateGetByTypeID', pclExamGroupTemplateResultID);
  }

  getPCLExamResultTemplateGetAll(pclExamGroupTemplateResultID) {
    return internalApiService.postAsync('PCLs/PCLResultTemplate/PCLExamResultTemplateGetAll', pclExamGroupTemplateResultID);
  }

  getPCLExamParamResultGetAll(payload) {
    return internalApiService.postAsync('PCLs/PCLResultTemplate/PCLExamParamResultGetAll', payload);
  }
 
  getPCLExamResultTemplateGetByID(pclExamResultTemplateID) {
    return internalApiService.postAsync('PCLs/PCLResultTemplate/PCLExamResultTemplateGetByID', pclExamResultTemplateID);
  }

  add(payload) {
    return internalApiService.postAsync('PCLs/PCLResultTemplate/PCLExamResultTemplateInsert', payload);
  }

  update(payload) {
    return internalApiService.postAsync('PCLs/PCLResultTemplate/PCLExamResultTemplateUpdate', payload);
  }

//   API Lập kết luận thực hiện CLS ( @Huan Nguyen )
// PCLs/PCLResultTemplate
// - Lấy danh sách nhóm: PCLExamParamResultGetAll (PCLExamParamResultGetAllRequest request)
// - Lấy danh sách mẫu:  PCLExamResultTemplateGetAll(long PCLExamGroupTemplateResultID) 
// - Lấy chi tiết mẫu: PCLExamResultTemplateGetByID(long PCLExamResultTemplateID) 
// - Cập nhật nhóm: PCLExamResultTemplateInsert(PCLExamResultTemplate request)
// - Lưu mẫu: PCLExamResultTemplateInsert(PCLExamParamResult request)
// - Cập nhật mẫu: PCLExamResultTemplateUpdate(PCLExamParamResult request)
// -







// Lấy danh sách template ở màn hình thực hiện: PCLExamResultTemplateGetByTypeID(PCLExamResultTemplateGetByTypeIDRequest request)

}

export default new PCLTemplateService();
