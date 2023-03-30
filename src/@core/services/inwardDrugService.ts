import { PharmacySellPriceProfitScale_GetList_PagingRequest } from "@core/models/param-classes/pharmacy/pharmacySellPriceProfitScaleGetListPagingRequest";
import { InwardDrugInvoice } from "@core/models/pharmacy/inwardDrugInvoice";
import { 
  GetRefShelfDrugLocationAutoCompleteRequest, 
  GetspInwardDrugDetailsByIDRequest, 
  InwardDrugInvoiceRequest, 
  InwardDrugInvoiceRequest_Insert, 
  InwardDrugRequest_Update, 
  SearchRefDrugGenericDetailsRequest 
} from "@core/models/pharmacy/inwardDrugInvoiceRequest";
import internalApiService from "./base/internalApiService";

class InwardDrugService{
  searchInwardInvoiceDrug(payload: InwardDrugInvoiceRequest) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/SearchInwardInvoiceDrug', payload);
  }

  loadPharmacyPurchaseOrder(payload: number) {
    return internalApiService.postAsync('Pharmacy/PharmacyPurchaseOrder/PharmacyPurchaseOrder_BySupplierID', payload);
  }

  searchRefDrugDetails(payload: SearchRefDrugGenericDetailsRequest) {
    return internalApiService.postAsync('Pharmacy/DrugService/SearchRefDrugGenericDetails_AutoPaging', payload);
  }

  searchShelfDrugLocation(payload: GetRefShelfDrugLocationAutoCompleteRequest) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/GetRefShelfDrugLocationAutoComplete', payload);
  }

  getInwardDrugDetailsByID(payload: GetspInwardDrugDetailsByIDRequest) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/GetspInwardDrugDetailsByID', payload);
  }
  
  addInwardInvoiceDrug(payload: InwardDrugInvoiceRequest_Insert) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/InwardDrugInvoices_Insert', payload);
  }

  updateInwardInvoiceDrug(payload: InwardDrugInvoice) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/InwardDrugInvoices_Update', payload);
  }

  deleteInwardInvoiceDrug(payload: number) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/InwardDrugInvoices_Delete', payload);
  }

  getInvoiceDrugByID(payload: number) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/GetInwardDrugInvoiceByID', payload);
  }

  addInwardDrugs(payload) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/InwardDrug_Insert', payload);
  }

  updateInwardDrug(payload: InwardDrugRequest_Update) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/InwardDrug_Update', payload);
  }

  deleteInwardDrug(payload: number) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/InwardDrug_Delete', payload);
  }

  loadPharmacySellPriceProfitScale(payload: PharmacySellPriceProfitScale_GetList_PagingRequest) {
    return internalApiService.postAsync('Pharmacy/DrugService/PharmacySellPriceProfitScale_GetList_Paging', payload);
  }

  getOutwardInternalExportPharmacyInvoice(payload) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/OutwardInternalExportPharmacyInvoice', payload);
  }

  inwardDrugInvoice_SaveXML(payload) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/InwardDrugInvoice_SaveXML', payload);
  }
}

export default new InwardDrugService()