import { PagedData } from '@core/models/common/searchCriteria';
import { GetSearchDrugDeptClassesRequest } from '@core/models/param-classes/pharmacy/getSearchDrugDeptClassesRequest';
import { RefGenericDrugDetail } from '@core/models/pharmacy/refGenericDrugDetail';
import { DrugClass, RefUnit } from '@core/models/pharmacy/refUnit';
import internalApiService from './base/internalApiService';

class pharmacyManagementService {
  addNewDrug(payload) {
    return internalApiService.postAsync('Pharmacy/DrugService/AddNewDrug_New', payload);
  }

  updateDrug_New(payload) {
    return internalApiService.postAsync('Pharmacy/DrugService/UpdateDrug_New', payload);
  }

  deleteDrugByID_New(payload) {
    return internalApiService.postAsync('Pharmacy/DrugService/DeleteDrugByID_New', payload);
  }
  
  getAllDrugForManagement(payload): Promise<PagedData<RefGenericDrugDetail>> {
    return internalApiService.postAsync('Pharmacy/DrugService/SearchRefGenericDrugDetail_Simple', payload);
  }

  getUnit(): Promise<PagedData<RefUnit>> {
    return internalApiService.postAsync('Pharmacy/AnotherRef/GetUnits');
  }

  getAllRefGeneric(): Promise<PagedData<DrugClass>> {
    return internalApiService.postAsync('Pharmacy/DrugService/GetAllRefGeneric');
  }

  getFamilyTherapies(payload): Promise<PagedData<DrugClass>> {
    return internalApiService.postAsync('Pharmacy/DrugService/GetFamilyTherapies', payload);
  }

  getRefGenericByName(payload: GetSearchDrugDeptClassesRequest): Promise<PagedData<DrugClass>> {
    return internalApiService.postAsync('Pharmacy/DrugService/GetSearchDrugDeptClasses', payload);
  }

  getLookupByID(payload) {
    return internalApiService.postAsync('Patient/GetAllLookupValuesByType', payload);
  }

  getPharmaceuticalCompany() {
    return internalApiService.postAsync('Pharmacy/DrugService/GetPharmaceuticalCompanyCbx');
  }
  
  getRefPharmacyDrugCategory() {
    return internalApiService.postAsync('Pharmacy/DrugService/LoadRefPharmacyDrugCategory');
  }

  getAllCountry() {
    return internalApiService.postAsync('Patient/GetAllCountries');
  }

  getRefGenDrugCategory() {
    return internalApiService.postAsync('Pharmacy/DrugService/RefGenDrugBHYT_Category_Load', { isClassification : false });
  }

  getDrugByID(payload) {
    return internalApiService.postAsync('Pharmacy/DrugService/SearchRefGenericDrugDetail_ByDrugID', payload);
  }

  getDrugSupplier(drugId) {
    return internalApiService.postAsync('Pharmacy/DrugService/SupplierGenericDrug_LoadDrugIDNotPaging', drugId);
  }
}

export default new pharmacyManagementService();
