export interface SearchHospitalsRequest {
  entity?: HospitalSearchCriteria;
  pageIndex?: number;
  pageSize?: number;
  bCountTotal?: boolean;
}

export interface HospitalSearchCriteria {
	hosID?: number;
    cityProvinceName?: string;
    cityProvinceID?: number;
    hospitalCode?: string;
    hosShortName?: string;
    hosName?: string;
    hosAddress?: string;
    hosLogoImgPath?: string;
    usedForPaperReferralOnly?: boolean;
    isSearchAll?: boolean;
    v_HospitalType?: number;
    hICode?: string;
    isPaperReferal?: boolean;
}