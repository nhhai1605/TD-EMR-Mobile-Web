import { EntityStateEnum } from '../enums/entityState';
import { Hospital } from '../reference/hospital';
import { HealthInsurance } from './healthInsurance';

export interface PaperReferal {
  refID?: number;
  hiId?: number;
  healthInsurance?: HealthInsurance;
  transferFormID?: number;
  transferNum?: string;
  hospitalID?: number;
  hospital?: Hospital;
  refCreatedDate?: string;
  treatmentFaculty?: string;
  generalDiagnoses?: string;
  currentStatusOfPt?: string;
  paperState?: string;
  acceptedDate?: string;
  notes?: string;
  markAsDeleted?: boolean;
  isActive?: boolean;
  isBrandNew?: boolean;
  isChronicDisease?: boolean;
  isReUse?: boolean;
  ptRegistrationID?: number;
  cityProvinceName?: string;
  issuerLocation?: string;
  issuerCode?: string;
  entityState?: EntityStateEnum;
  used?: boolean;
  admissionDate?: string;
  validDateFrom?: string;
  validDateTo?: string;
  fromHospital?: string;
  dischargeReason?: string;
}
