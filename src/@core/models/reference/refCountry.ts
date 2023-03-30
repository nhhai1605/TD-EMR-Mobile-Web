export interface RefCountry {
  countryID?: number;
  countryName?: string;
  countryCode?: string;
}

export interface CitiesProvince {
  cityProvinceID?: number;
  cityProvinceName?: string;
  cityProviceCode?: string;
  cityProviceHICode?: string;
  shortNameCitiProvince?: string;
}

export interface WardNames {
  wardNameID?: number;
  suburbNameID?: number;
  wardName?: string;
}

export interface SuburbNames {
  suburbNameID?: number;
  cityProvinceID?: number;
  suburbName?: string;
  descNote?: string;
  displayName?: string;
}
