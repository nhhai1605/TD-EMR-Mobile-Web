import { PhysicalExamination } from '@core/models/patients/physicalExamination';

export interface AddNewPhysicalExaminationRequest {
  phyExam?: PhysicalExamination;
  staffID?: number;
}
