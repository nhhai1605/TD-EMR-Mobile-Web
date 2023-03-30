import internalApiService from './base/internalApiService';

class parmacyPaymentReportService {
  chooseStorage(payload) {
    return internalApiService.postAsync('Pharmacy/AnotherRef/GetAllStoragesNotPaging', payload);
  }

  getDetailPharmacyPaymentReport(payload) {
    return internalApiService.postAsync('Pharmacy/PharmacyReport/BaoCao_BangKeChiTietPhatThuoc', payload);
  }

  searchSavedPharmacyDetailPaymentReport(payload) {
    return internalApiService.postAsync('Pharmacy/PharmacyReport/PharmacyOutwardDrugReport_Search', payload);
  }

  savePharmacyDetailPaymentReport(payload) {
    return internalApiService.postAsync('Pharmacy/PharmacyReport/PharmacyOutwardDrugReport_Insert', payload);
  }

  getDetailPaymentReportByID(payload) {
    return internalApiService.postAsync('Pharmacy/PharmacyReport/PharmacyOutwardDrugReportDetail_GetID', payload);
  }
}

export default new parmacyPaymentReportService();
