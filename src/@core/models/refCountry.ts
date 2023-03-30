export interface RefCountry {
    countryID: number;
    countryName: string | null;
    countryCode: string | null;
}

export interface CitiesProvince {
    cityProvinceID: number;
    cityProvinceName: string | null;
    cityProviceCode: string | null;
    cityProviceHICode: string | null;
    shortNameCitiProvince: string | null;
}

export interface WardNames {
    wardNameID: number;
    suburbNameID: number;
    wardName: string | null;
}

export interface SuburbNames {
    suburbNameID: number;
    cityProvinceID: number;
    suburbName: string | null;
    descNote: string | null;
    displayName: string | null;
}

