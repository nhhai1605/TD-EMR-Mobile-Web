import { V_OutDrugInvStatus } from "@core/models/enums/emrEnum";
import { GetOutwardDrugServiceRequest } from "@core/models/pharmacy/collectedDrugServiceRequest";
import internalApiService from "./base/internalApiService";

class CollectedDrugService {
  getOutwardDrugService(payload: GetOutwardDrugServiceRequest) {
    return internalApiService.postAsync('Drug/OutwardDrugInvoiceSearch', payload);
  }
  
  collectDrugInvoice(outiID: number) {
    return internalApiService.postAsync('Drug/OutwardDrugInvoicesUpdateStatus', {outiID, v_OutDrugInvStatus: V_OutDrugInvStatus.DRUGCOLLECTED});
  }
  
  collectMultiDrugInvoice(payload: number[]) {
    return internalApiService.postAsync('Drug/OutwardDrugInvoiceUpdateCollectMulti', payload);
  }
  
}

export default new CollectedDrugService();