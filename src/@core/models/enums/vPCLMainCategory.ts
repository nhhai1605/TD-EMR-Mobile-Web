import i18n from '@core/utils/i18n';

export enum V_PCLMainCategoryEnum {
  Unknown = 0,
  Imaging = 28200,
  Laboratory = 28201,
  Pathology = 28202,
  Laboratory_External = 28203,
  GeneralSurgery = 28204,
}

export const V_PCLMainCategoryEnumDescription = new Map<number, string>([
  [V_PCLMainCategoryEnum.Imaging, i18n.t('pCLMainCategory.imaging')],
  [V_PCLMainCategoryEnum.Laboratory, i18n.t('pCLMainCategory.laboratory')],
]);

export const PCLMainCategory = [
  {
    Id: V_PCLMainCategoryEnum.Imaging,
    Text: i18n.t('pCLMainCategory.imaging'),
  },
  {
    Id: V_PCLMainCategoryEnum.Laboratory,
    Text: i18n.t('pCLMainCategory.laboratory'),
  },
  // {
  //   Id: V_PCLMainCategoryEnum.Pathology,
  //   Text: i18n.t('pCLMainCategory.pathology'),
  // },
  // {
  //   Id: V_PCLMainCategoryEnum.GeneralSurgery,
  //   Text: i18n.t('pCLMainCategory.generalSurgery'),
  // },
];

export enum PCLExamTypeSubCategoryEnum {
  XRAY = 1,
  Ultrasound,
  Scan,
  MRI,
  ECG = 9,
  Endoscopic = 13,
  Test = 15,
}

export const PCLExamTypeSubCategories = [
  {
    Id: PCLExamTypeSubCategoryEnum.XRAY,
    Text: 'X-Ray',
  },
  {
    Id: PCLExamTypeSubCategoryEnum.Ultrasound,
    Text: 'Siêu âm',
  },
  {
    Id: PCLExamTypeSubCategoryEnum.Scan,
    Text: 'Scan',
  },
  {
    Id: PCLExamTypeSubCategoryEnum.MRI,
    Text: 'MRI',
  },
  {
    Id: PCLExamTypeSubCategoryEnum.ECG,
    Text: 'Điện tim - ECG',
  },
  {
    Id: PCLExamTypeSubCategoryEnum.Endoscopic,
    Text: 'Nội soi',
  },
  {
    Id: PCLExamTypeSubCategoryEnum.Test,
    Text: 'Xét nghiệm',
  },
];
