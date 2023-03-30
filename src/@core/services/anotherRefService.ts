import { GetAllStoragesNotPagingRequest } from "@core/models/pharmacy/refShelfDrugLocation";
import internalApiService from "./base/internalApiService";

class AnotherRefService{
  getAllStorages(payload: GetAllStoragesNotPagingRequest) {
    return internalApiService.postAsync('Pharmacy/AnotherRef/GetAllStoragesNotPaging', payload);
  }

  getAllCurrency(isActive: boolean) {
    return internalApiService.postAsync('Pharmacy/AnotherRef/GetAllCurrency', isActive);
  }
}

export default new AnotherRefService()