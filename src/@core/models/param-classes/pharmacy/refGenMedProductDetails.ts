export interface RefGenMedProductDetails {
  drugCode: string;
  brandName: string;
  genericName: string;
  pharmaceuticalCompany: {
    pcoName: string;
  };
  packaging: string;
  unitPackaging: string;
  seletedUnit: {
    unitName: string;
  };
  unitPrice: string;
  supplierMain: {
    supplierName: string;
  };
}
