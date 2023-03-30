export interface ApplyHiToInPatientRegistrationRequest {
  registrationID?: number,
  hiid?: number,
  hisID?: number,
  hiBenefit?: number,
  isCrossRegion?: boolean,
  paperReferalID?: number,
  findPatient?: number,
  bIsEmergency?: boolean,
  confirmHiStaffID?: number,
  isHICard_FiveYearsCont?: boolean,
  isChildUnder6YearsOld?: boolean,
  isHICard_FiveYearsCont_NoPaid?: boolean,
  fiveYearsAppliedDate?: Date,
  eConfirmType?: number,
  isAllowCrossRegion?: boolean
}