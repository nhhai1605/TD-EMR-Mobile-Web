import i18n from '@core/utils/i18n';

export enum PatientTypeEnum {
  NORMAL_PATIENT = 1,
  INSUARED_PATIENT = 2,
  TRANSFERRED_PATIENT = 3,
  OTHERS = 4,
  PAYAFTER = 8,
}

export const PatientTypeEnums = [
  {
    Id: PatientTypeEnum.NORMAL_PATIENT,
    Text: i18n.t('Dịch vụ'),
  },
  {
    Id: PatientTypeEnum.INSUARED_PATIENT,
    Text: i18n.t('Có BHYT'),
  },
  {
    Id: PatientTypeEnum.TRANSFERRED_PATIENT,
    Text: i18n.t('Chuyển viện'),
  },
  {
    Id: PatientTypeEnum.OTHERS,
    Text: i18n.t('Khác'),
  },
  {
    Id: PatientTypeEnum.PAYAFTER,
    Text: i18n.t('Trả sau'),
  }
];
