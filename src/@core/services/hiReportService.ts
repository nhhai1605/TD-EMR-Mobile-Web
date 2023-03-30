import internalApiService from "./base/internalApiService";

class hiReportService {
  searchPatientRegistrationForHiReport(payload) {
    return internalApiService.postAsync('HiReport/SearchRegistrationsForHIReport', payload);
  }

  getReportPreviewData(payload) {
    return internalApiService.postAsync('HiReport/GetHIReportDataForPreview', payload);
  }

  confirmHiReport(payload) {
    return internalApiService.postAsync('HiReport/CreateHIReport_4210', payload)
  }

  sendReportToMinistryofHealth(payload) {
    return internalApiService.postAsync('HiReport/ReportToMinistryofHealth_4210', payload)
  }

  dowloadXmlFile(hiReportId: number) {
    return internalApiService.postAsync('HiReport/GetReportBHYTXml', hiReportId)
  }
}

export default new hiReportService();