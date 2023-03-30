import { DrugDeptSupplier } from "@core/models/pharmacy/drugDeptSupplier";
import { SearchSupplierAutoPagingRequest,  } from "@core/models/pharmacy/drugDeptSupplierSearchCriteria";
import { SupplierGenericDrug_LoadSupplierIDRequest, UpdateSupplierPriceRequest } from "@core/models/pharmacy/supplierGenericDrug";
import internalApiService from "./base/internalApiService";

class SupplierManagementService{
  getSearchSupplierAutoPaging(payload: SearchSupplierAutoPagingRequest) {
    return internalApiService.postAsync('Pharmacy/Supplier/SearchSupplierAutoPaging', payload);
  }

  addSupplier(payload: DrugDeptSupplier) {
    return internalApiService.postAsync('Pharmacy/Supplier/AddSupplier', payload);
  }

  updateSupplier(payload: DrugDeptSupplier) {
    return internalApiService.postAsync('Pharmacy/Supplier/UpdateSupplier', payload);
  }

  deleteSupplierByID(payload: number) {
    return internalApiService.postAsync('Pharmacy/Supplier/DeleteSupplierByID', payload);
  }

  getSupplierGenericDrug(payload: SupplierGenericDrug_LoadSupplierIDRequest) {
    return internalApiService.postAsync('Pharmacy/Supplier/SupplierGenericDrug_LoadSupplierID', payload);
  }

  updateSupplierPrice(payload: UpdateSupplierPriceRequest) {
    return internalApiService.postAsync('Pharmacy/Supplier/UpdateSupplierPrice', payload);
  }
}

export default new SupplierManagementService()