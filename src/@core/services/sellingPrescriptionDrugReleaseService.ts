import { Prescription } from '@core/models/consultation/prescription';
import { Prescription_ByPrescriptIDIssueIDRequest } from '@core/models/param-classes/consultation/prescriptionByPrescriptIDIssueIDRequest';
import { CancelOutwardDrugInvoiceWithoutCreateNewInvoiceRequest } from '@core/models/param-classes/pharmacy/cancelOutwardDrugInvoiceWithoutCreateNewInvoiceRequest';
import { SaveDrugNewRequest } from '@core/models/param-classes/pharmacy/saveDrugNewRequest';
import internalApiService from './base/internalApiService';
import { PagedData } from '@core/models/common/searchCriteria';
import { OutwardDrug } from '@core/models/pharmacy/outWardDrug';
import { OutwardDrugInvoice } from '@core/models/pharmacy/outwardDrugInvoice';
import { GetDrugForSellVisitor } from '@core/models/consultation/prescriptionDetail';

class SellingPrescriptionDrugReleaseService {
  getPrescriptionByPrescriptIssueID(payload: Prescription_ByPrescriptIDIssueIDRequest): Promise<Prescription> {
    return internalApiService.postAsync('Consultation/Prescription/Prescription_ByPrescriptIDIssueID', payload);
  }

  getInBatchNumberAndPriceForPrescription(payload): Promise<PagedData<OutwardDrug>> {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/GetInBatchNumberAndPrice_ForPrescription', payload);
  }

  saveAndPayPrescriptionForSelling(payload: SaveDrugNewRequest): Promise<OutwardDrugInvoice> {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/SaveDrug_New', payload);
  }

  updateOutwardDrugInvoiceWithoutCreateNew(payload: CancelOutwardDrugInvoiceWithoutCreateNewInvoiceRequest): Promise<boolean> {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/CancelOutwardDrugInvoice_WithoutCreateNewInvoice', payload);
  }

  getOutwardDrugService(payload): Promise<PagedData<OutwardDrugInvoice>> {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/GetOutWardDrugInvoiceSearchAllByStatus', payload);
  }

  getPrescriptionForSelling(payload): Promise<PagedData<Prescription>> {
    return internalApiService.postAsync('Consultation/Prescription/SearchPrescription', payload);
  }

  getOutwardDrugInvoiceByID(id): Promise<OutwardDrugInvoice> {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/GetOutwardDrugInvoiceByID', id);
  }

  getOutWardDrugInvoiceVisitorByID(id): Promise<OutwardDrugInvoice> {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/GetOutWardDrugInvoiceVisitorByID', id);
  }

  getOutwardDrugDetails(payload): Promise<PagedData<OutwardDrug>> {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/GetOutwardDrugDetails', payload);
  }

  saveForSellingRetail(payload: OutwardDrugInvoice) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/OutwardDrugInvoice_SaveByType', payload);
  }

  payForSellingRetail(payload) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/AddTransactionVisitor', payload);
  }

  cancelAndRefundRetailInvoice(payload: OutwardDrugInvoice) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/OutWardDrugInvoiceVisitor_Cancel', payload);
  }

  updateInvoicePayedForSellingRetail(payload: OutwardDrugInvoice) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/UpdateInvoicePayed', payload);
  }

  getDrugForAutocompleteForSell(payload): Promise<PagedData<GetDrugForSellVisitor>> {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/GetDrugForSellVisitorAutoComplete_ForPrescription', payload);
  }

  getDrugForSellVisitorBatchNumber(payload): Promise<PagedData<GetDrugForSellVisitor>> {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/GetDrugForSellVisitorBatchNumber', payload);
  }

  getDrugForSellVisitorAutoCompleteForPrescriptionByID(payload): Promise<PagedData<GetDrugForSellVisitor>> {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/GetDrugForSellVisitorAutoComplete_ForPrescriptionByID', payload);
  }

  payForRegistration(payload): Promise<boolean> {
    return internalApiService.postAsync('Patient/PayForRegistration_V3', payload);
  }

  cancelOutwardDrugInvoice(payload): Promise<boolean> {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/CancelOutwardDrugInvoice_Pst', payload);
  }

  getOutwardDrugInvoiceExported(payload) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/OutWardDrugInvoice_SearchByType', payload);
  }

  getRequestDrugInward(payload) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/SearchRequestDrugInward', payload);
  }

  getDrugForAutocompleteForForOutInternalPharmacy(payload): Promise<PagedData<GetDrugForSellVisitor>> {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/GetDrugAutoComplete_ForOutInternalPharmacy', payload);
  }

  saveOutwardDrugInvoiceForOutInternal(payload: OutwardDrugInvoice) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/OutwardDrugInvoice_SaveByType_Pst', payload);
  }

  refundForOutInternal(payload) {
    return internalApiService.postAsync('Pharmacy/InwardDrugService/AddTransactionHoanTien', payload);
  }

  getOutwardDrugAndPriceByListPrescription(payload) {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/GetOutwardDrugAndPrice_ByListPresciption', payload);
  }

  saveAndPayDrug(payload) {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/SaveAndPayDrug', payload);
  }

  performAndPayDrug(payload) {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/PerformAndPayDrug', payload);
  }

  cancelConfirmHIBenefit(payload) {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/CancelConfirmHIBenefit', payload);
  }

  doRecalRegistrationInfo(payload) {
    return internalApiService.postAsync('Patient/DoRecalRegistrationInfo', payload);
  }

  getOutWardDrugInvoiceByPtRegistrationID(ptRegistrationID) {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/GetOutWardDrugInvoiceByPtRegistrationID', ptRegistrationID);
  }

  getDiagnosisPrescriptions(ptRegistrationID) {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/GetDiagnosisForOutwardDrug', ptRegistrationID);
  }

  setConfirmForRegistration(payload) {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/SetConfirmValueForRegistration', payload);
  }
  
  cancelConfirmHIBenefitOnly(payload) {
    return internalApiService.postAsync('Pharmacy/SaleAndOutward/CancelConfirmHIBenefitOnly', payload);
  }

  
}

export default new SellingPrescriptionDrugReleaseService();
