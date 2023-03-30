import internalApiService from './base/internalApiService';

class RefMedicalServiceGroup {
  // load list service , default ALl
  getRefMedicalServiceGroups(medicalServiceGroupCode: string) {
    return internalApiService.postAsync(
      'Configuration/RefMedicalServiceGroup/GetRefMedicalServiceGroups',
      medicalServiceGroupCode
    );
  }

  // load details one service
  getRefMedicalServiceGroupItemsByID(medicalServiceGroupID: number) {
    return internalApiService.postAsync(
      'Configuration/RefMedicalServiceGroup/GetRefMedicalServiceGroupItemsByID',
      medicalServiceGroupID
    );
  }

  // Saving, Update and Del
  onSaveEditRefMedicalServiceGroup(aRefMedicalServiceGroup): Promise<number> {
    return internalApiService.postAsync(
      'Configuration/RefMedicalServiceGroup/EditRefMedicalServiceGroup',
      aRefMedicalServiceGroup
    );
  }
}
export default new RefMedicalServiceGroup();
