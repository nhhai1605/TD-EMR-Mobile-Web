import { PharmacyPurchaseOrder } from "@core/models/pharmacy/pharmacyPurchaseOrder";
import { 
  GetDrugForAutoCompleteForPurchaseOrderRequest, 
  PharmacyPurchaseOrderDetails_CheckOrderRequest, 
  PharmacyPurchaseOrderDetail_ByParentIDRequest, 
  PharmacyPurchaseOrderDetail_GetFromEstimateRequest, 
  PharmacyPurchaseOrders_Search, 
  RefGenericDrugDetail_WarningOrderRequest
} from "@core/models/pharmacy/purchaseOrderRequest";
import internalApiService from "./base/internalApiService";

class PurchaseOrderService{
  searchPurchaseOrder(payload: PharmacyPurchaseOrders_Search) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/PharmacyPurchaseOrders_Search', payload);
  }

  getPurchaseOrderDetail(payload: PharmacyPurchaseOrderDetail_ByParentIDRequest) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/PharmacyPurchaseOrderDetail_ByParentID', payload);
  }

  getDrugForAutoCompleteForPurchaseOrder(payload: GetDrugForAutoCompleteForPurchaseOrderRequest) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/GetDrugForAutoCompleteForPurchaseOrder', payload);
  }

  getPODetailsFromEstimate(payload: PharmacyPurchaseOrderDetail_GetFromEstimateRequest) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/PharmacyPurchaseOrderDetail_GetFromEstimate', payload);
  }

  savePharmacyPurchaseOrders(payload: PharmacyPurchaseOrder) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/PharmacyPurchaseOrders_Save', payload);
  }

  deletePharmacyPurchaseOrders(payload: number) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/PharmacyPurchaseOrders_Delete', payload);
  }

  getPharmacyPurchaseOrderByID(payload: number) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/PharmacyPurchaseOrder_ByID', payload);
  }

  getWarningOrder(payload: RefGenericDrugDetail_WarningOrderRequest) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/PharmacyPurchaseOrders_WarningOrder', payload);
  }

  getCheckOrder(payload: PharmacyPurchaseOrderDetails_CheckOrderRequest) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/PharmacyPurchaseOrderDetails_CheckOrder', payload);
  }
}

export default new PurchaseOrderService()