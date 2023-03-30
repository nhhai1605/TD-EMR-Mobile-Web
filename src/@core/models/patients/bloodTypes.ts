import { BloodType } from "./generalExamination";

export const enum BloodTypeEnum {
  OPlus = 1,
  APlus = 2,
  BPlus = 3,
  ABPlus = 4,
  OSubtract = 5,
  ASubtract = 6,
  BSubtract = 7,
  ABSubtract = 8,
}
export const BloodTypes: BloodType[] = [
  {
    bloodTypeID: BloodTypeEnum.OPlus,
    bloodTypeName: 'O (Rh+)',
    rhType: 'Rh+',
  },
  {
    bloodTypeID: BloodTypeEnum.APlus,
    bloodTypeName: 'A (Rh+)',
    rhType: 'Rh+',
  },
  {
    bloodTypeID: BloodTypeEnum.BPlus,
    bloodTypeName: 'B (Rh+)',
    rhType: 'Rh+',
  },
  {
    bloodTypeID: BloodTypeEnum.ABPlus,
    bloodTypeName: 'AB (Rh+)',
    rhType: 'Rh+',
  },
  {
    bloodTypeID: BloodTypeEnum.OSubtract,
    bloodTypeName: 'O (Rh-)',
    rhType: 'Rh-',
  },
  {
    bloodTypeID: BloodTypeEnum.ASubtract,
    bloodTypeName: 'A (Rh-)',
    rhType: 'Rh-',
  },
  {
    bloodTypeID: BloodTypeEnum.BSubtract,
    bloodTypeName: 'B (Rh-)',
    rhType: 'Rh-',
  },
  {
    bloodTypeID: BloodTypeEnum.ABSubtract,
    bloodTypeName: 'AB (Rh-)',
    rhType: 'Rh-',
  },
];
