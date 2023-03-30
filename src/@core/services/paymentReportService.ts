import internalApiService from './base/internalApiService';

class PaymentReportService {
  getDetailPaymentReport(payload) {
    return internalApiService.postAsync('Patient/GetReportOutPatientCashReceipt_TongHop', payload);
  }

  addReportPaymentReceiptByStaff(payload) {
    return internalApiService.postAsync('Patient/AddReportPaymentReceiptByStaff', payload);
  }

  getReportPaymentReceiptByStaff(payload) {
    return internalApiService.postAsync('Patient/GetReportPaymentReceiptByStaff', payload);
  }
}

export default new PaymentReportService();
