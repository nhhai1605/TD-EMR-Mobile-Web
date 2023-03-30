import { unitManagement } from './../models/param-classes/pharmacy/unitManagement';
import internalApiService from './base/internalApiService';
import { RefUnit } from '@core/models/pharmacy/refUnit';

class unitService {
  getListUnit(payload: unitManagement): Promise<RefUnit> {
    return internalApiService.postAsync('Pharmacy/AnotherRef/GetUnits ', payload);
  }

  search(payload: RefUnit) {
    return internalApiService.postAsync('Pharmacy/AnotherRef/SearchUnit', payload);
  }

  insert(payload: RefUnit) {
    return internalApiService.postAsync('Pharmacy/AnotherRef/AddNewUnit', payload);
  }

  update(payload: RefUnit) {
    return internalApiService.postAsync('Pharmacy/AnotherRef/UpdateUnit', payload);
  }

  delete(payload: number) {
    return internalApiService.postAsync('Pharmacy/AnotherRef/DeleteUnit', payload);
  }
}

export default new unitService();
