import internalApiService from './base/internalApiService';

class AllergiesService {
  searchRefDrugNames(payload) {
    return internalApiService.postAsync('Patient/SearchRefDrugNames', payload);
  }

  getMDAllergiesByPatientID(payload) {
    return internalApiService.postAsync('Patient/MDAllergies_ByPatientID', payload);
  }

  getMDWarningsByPatientID(payload) {
    return internalApiService.postAsync('Patient/MDWarnings_ByPatientID', payload);
  }
  
  saveAllergiesAndWarning(payload) {
    return internalApiService.postAsync('Patient/AllergiesAndWarnings_SaveAndUpdate', payload);
  }
}

export default new AllergiesService();
