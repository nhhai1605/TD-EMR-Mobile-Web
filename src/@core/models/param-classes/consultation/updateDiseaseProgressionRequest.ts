import { DiagnosisTreatment } from '@core/models/consultation/diagnosisTreatment';

export interface UpdateDiseaseProgressionRequest {
  entity: DiagnosisTreatment;
  isUpdate: boolean;
}
