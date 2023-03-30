import { AddReturnDrugInvoiceRequest, SearchReturnDrugInvoiceRequest } from "@core/models/pharmacy/returnDrugServiceRequest";
import internalApiService from "./base/internalApiService";

class ReturnDrugService {
  searchReturnDrugInvoice(payload: SearchReturnDrugInvoiceRequest) {
    return internalApiService.postAsync('Drug/GetOutWardDrugInvoiceSearchReturn', payload);
  }

  addReturnDrugInvoice(payload: AddReturnDrugInvoiceRequest) {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/AddOutWardDrugInvoiceReturnVisitor', payload);
  }
}

export default new ReturnDrugService();