import i18n from '@core/utils/i18n';

export const genders = [
  { Id: 'U', Text: "Không xác định"},
  { Id: 'F', Text: i18n.t('medicalService.female') },
  { Id: 'M', Text: i18n.t('medicalService.Male') },
];

export const genderType = [
  { Id: 'F', Text: i18n.t('medicalService.female')},
  { Id: 'M', Text: i18n.t('medicalService.Male') },
  { Id: 'A', Text: i18n.t('medicalService.All')},
];
