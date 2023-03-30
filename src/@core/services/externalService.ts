import internalApiService from "./base/internalApiService";

class ExternalService {
  syncData(patientRegistrationId: number, patientId : number) {
    return internalApiService.postAsync(`External/SyncDataToEHR/${patientId}/${patientRegistrationId}`);
  }

  requestOrderToRis(payload) {
    return internalApiService.postAsync(`External/MakeNewOrderToRis`, payload);
  }

  cancelRisOrder(payload) {
    return internalApiService.postAsync(`External/CancelOrderRis`, payload);
  }
}

export default new ExternalService();