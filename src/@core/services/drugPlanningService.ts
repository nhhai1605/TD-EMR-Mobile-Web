import internalApiService from './base/internalApiService';

class DrugPlanningService {
  searchingDrugEstimationForPO(payload) {
    return internalApiService.postAsync('Pharmacy/EstimationDrug/PharmacyEstimationForPO_Search', payload);
  }

  getDetailDrugEstimation(payload) {
    return internalApiService.postAsync('Pharmacy/EstimationDrug/PharmacyEstimationForPODetail_ByParentID', payload);
  }

  saveandUpdateDetailDrugEstimation(payload) {
    return internalApiService.postAsync('Pharmacy/EstimationDrug/PharmacyEstimationForPO_FullOperator', payload);
  }

  searchRefDrugGenericDetails(payload) {
    return internalApiService.postAsync('Pharmacy/DrugService/SearchRefDrugGenericDetails_RefAutoPaging', payload);
  }

  getDrugIsUsedByID(payload) {
    return internalApiService.postAsync('Pharmacy/EstimationDrug/PharmacyEstimationForPODetail_ByDrugID', payload);
  }

  checkExistsDrugEstimation(payload) {
    return internalApiService.postAsync('Pharmacy/EstimationDrug/PharmacyEstimationForPO_CheckExists', payload);
  }

  getEstimationForMonthPharmacy(payload) {
    return internalApiService.postAsync('Pharmacy/EstimationDrug/GetEstimationForMonthPharmacy', payload);
  }

  deleteDetailDrugEstimation(payload) {
    return internalApiService.postAsync('Pharmacy/EstimationDrug/PharmacyEstimationForPO_Delete', payload);
  }
}

export default new DrugPlanningService();
