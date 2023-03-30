import { AddOutPtTransactionFinalizationRequest, DeleteTransactionFinalizationRequest } from "@core/models/registrations/finalSettlementRequest";
import internalApiService from "./base/internalApiService";

class FinalSettlementService {
  addOutPtTransactionFinalization(payload: AddOutPtTransactionFinalizationRequest) {
    return internalApiService.postAsync('Patient/Finalization/AddOutPtTransactionFinalization', payload);
  }
  
  deleteOutPtTransactionFinalization(payload: DeleteTransactionFinalizationRequest) {
    return internalApiService.postAsync('Patient/Finalization/DeleteTransactionFinalization', payload);
  }
}

export default new FinalSettlementService();