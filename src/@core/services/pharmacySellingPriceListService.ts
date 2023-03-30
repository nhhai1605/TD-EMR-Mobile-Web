import internalApiService from './base/internalApiService';

class PharmacySellingPriceListService {
  getPharmacySellingPriceList(payload) {
    return internalApiService.postAsync('Pharmacy/DrugService/PharmacySellingPriceList_GetList_Paging', payload);
  }

  isMarkDeleted(id: number) {
    return internalApiService.postAsync('Pharmacy/DrugService/PharmacySellingPriceList_Delete', JSON.stringify(id));
  }

  getListItemPrice() {
    return internalApiService.postAsync('Pharmacy/DrugService/PharmacySellingPriceList_AutoCreate');
  }

  getListItemPriceOld(id: number) {
    return internalApiService.postAsync('Pharmacy/DrugService/PharmacySellingPriceList_Detail', JSON.stringify(id));
  }
  
  insertPriceList(payload) {
    return internalApiService.postAsync('Pharmacy/DrugService/PharmacySellingPriceList_AddNew', payload);
  }
  // getAllMedicalServiceTypes() {
  //   return internalApiService.postAsync('Configuration/MedServiceItemPrice/GetAllMedicalServiceTypes_SubtractPCL');
  // }

  // insert(payload: RefMedicalServiceItem) {
  //   const params = {
  //     request: payload,
  //     staffID: 0, //get from auth
  //   };
  //   return internalApiService.postAsync('Configuration/RefMedicalServiceItem/RefMedicalServiceItems_NotPCL_Insert', params);
  // }

  // update(payload: RefMedicalServiceItem) {
  //   return internalApiService.postAsync('Configuration/RefMedicalServiceItem/RefMedicalServiceItems_NotPCL_Update', payload);
  // }
}

export default new PharmacySellingPriceListService();
