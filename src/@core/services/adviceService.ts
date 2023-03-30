import { PrescriptionNoteTemplates } from '@core/models/consultation/prescriptionNoteTemplates';
import internalApiService from './base/internalApiService';

class adviceService {
  getAllIsActive(payload: number) {
    return internalApiService.postAsync('Consultation/Prescription/PrescriptionNoteTemplates_GetAllIsActive', payload);
  }

  save(payload: PrescriptionNoteTemplates) {
    return internalApiService.postAsync('Consultation/Prescription/PrescriptionNoteTemplates_Save', payload);
  }

  delete(payload) {
    return internalApiService.postAsync('Consultation/Prescription/PrescriptionNoteTemplates_Save', payload);
  }
}

export default new adviceService();
