import { EntityStateEnum } from '../enums/entityState';

export interface HealthInsurance {
  hiCardType? : {
    lookupID?: number;
    isChecked?: boolean;
    objectName?: string;
    objectNotes?: string;
    objectTypeID?: number;
    objectValue?: string;
  },
  v_HICardType ?: number;
  cityProvinceName ?: string ;
  provinceHICode ?: string ;
  cityProvinceID_Address ?: number;
  suburbNameID ?: number;
  patientStreetAddress ?: string ;
  kvCode ?: number;
  archiveNumber ?: string ;
  wardNameID ?: number;
  wardName ?: string ;
  iBeID ?: number;
  soBHXH ?: string ;
  maQL ?: string ;
  markAsDeleted ?: boolean;
  entityState ?: EntityStateEnum;
  isActive ?: boolean;
  isHistoryActive ?: boolean;
  isValid ?: boolean;
  hiPatientBenefit ?: number ;
  v_BenefitType ?: number;
  strObject ?: string ;
  strBenifit ?: string ;
  strProvince ?: string ;
  strDistrict ?: string ;
  strUnit ?: string ;
  strOrderNo ?: string ;
  hisID ?: number ;
  hosID ?: number ;
  isActiveAndNotDeleted ?: boolean;
  invalidFlag ?: boolean;
  editLocked ?: boolean;
  isDoing ?: boolean;
  used ?: boolean;
  hiid ?: number;
  patientID ?: number ;
  ibid ?: number ;
  hipCode ?: string ;
  hiCardNo ?: string ;
  registrationCode ?: string ;
  cofirmDuplicate ?: boolean;
  validDateFrom ?: string ;
  validDateTo ?: string ;
  checkedHICardValidResult ?: string ;
  healthInsuranceHistories ?: HealthInsuranceHistory[] ;
  healthInsurancePolicy ?: HealthInsurancePolicy ;
  registrationLocation ?: string ;
  insuranceBenefit ?: InsuranceBenefit ;
}

export interface HealthInsuranceHistory {
  hisID ?: number;
  hIID ?: number ;
  fromAppliedDate ?: string ;
  toAppliedDate ?: string ;
  isActive ?: boolean;
}

export interface HealthInsurancePolicy {
  hIPCode ?: string ;
  iBID ?: number;
  hIPDescription ?: string ;
  idx ?: number ;
}

export interface InsuranceBenefit {
  iBID ?: number;
  staffID ?: number ;
  rebatePercentage ?: number;
  maxPayable ?: number;
  maxPayableRemark ?: string ;
  percentageOnMaxPayable ?: number;
  updateDate ?: string ;
}
