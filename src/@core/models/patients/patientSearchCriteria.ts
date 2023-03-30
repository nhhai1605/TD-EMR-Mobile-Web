import { IGender } from "./gender";

export interface PatientSearchCriteria {
  ptRegistrationCode?: string;
  pMFCode?: string;
  idNumber?: string;
  fullName?: string;
  insuranceCard?: string;
  pCLRequestNumID?: string;
  patientCode?: string;
  orderBy?: string;
  isSearchByPatientPhoneNumber?: boolean;
  genderEnabled?: boolean;
  gender?: IGender;
  releaseDateEnabled?: boolean;
  releaseDateEnd?: string;
  releaseDateBegin?: string;
  birthDateEnabled?: boolean;
  birthDateEnd?: Date;
  birthDateBegin?: Date;
  entryDateEnabled?: boolean;
  entryDateEnd?: string;
  entryDateBegin?: string;
  isShowHICardNo?: boolean;
  pageIndex?: number;
  pageSize?: number;
  countTotal?: boolean;
  cityProvinceID?: number;
  suburbNameID?: number;
}
