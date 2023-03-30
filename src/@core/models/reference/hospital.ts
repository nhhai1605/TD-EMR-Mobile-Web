export interface Hospital {
  thongTuyen?: boolean;
  hosID?: number;
  cityProvinceName?: string;
  cityProvinceHICode?: string;
  cityProvinceID?: number;
  hospitalCode?: string;
  hosShortName?: string;
  hosName?: string;
  hosAddress?: string;
  hosLogoImgPath?: string;
  slogan?: string;
  hosPhone?: string;
  hosWebSite?: string;
  v_HospitalType?: number;
  hiCode?: string;
  usedForPaperReferralOnly?: boolean;
  isFriends?: boolean;
}

export interface IFacility {
  facilityID?: number;
  facilityCode?: string;
  pkhid?: number;
  serverURL?: string;
}
