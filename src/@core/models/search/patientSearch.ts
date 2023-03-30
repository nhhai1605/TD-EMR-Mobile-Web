import { CitiesProvince, SuburbNames, WardNames } from "../refCountry";

export interface GetPatientSearch {
  data?: PatientSearchTypes[];
  totalItems?: number;
  pageIndex?: number;
  pageSize?: number;
  totalPages?: number;
}

export interface PatientSearchTypes {
  ptRegistrationCode: string;
  pmfCode: string;
  fullName: string;
  ageString: string;
  insuranceCard: string;
  pclRequestNumID: string;
  patientCode: string;
  orderBy: string;
  isSearchByPatientPhoneNumber: boolean;
  genderEnabled: boolean;
  gender: {
    genderID: string;
    genderName: string;
  };
  genderObj: {
    genderID: string;
    genderName: string;
  };
  wardName: WardNames | null;
  suburbName: SuburbNames | null;
  citiesProvince: CitiesProvince | null;
  releaseDateEnabled: boolean;
  releaseDateEnd: string;
  releaseDateBegin: string;
  birthDateEnabled: boolean;
  birthDateEnd: string;
  birthDateBegin: string;
  entryDateEnabled: boolean;
  entryDateEnd: string;
  entryDateBegin: string;
  isShowHICardNo: boolean;
  pageIndex: number;
  pageSize: number;
  countTotal: boolean;
}
