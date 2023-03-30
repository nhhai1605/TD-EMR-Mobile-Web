import { MaterialStatusEnum } from '@core/models/enums/materialStatus';
import i18n from '@core/utils/i18n';

export const MaterialStatus = [
  {
    Id: MaterialStatusEnum.Unknown,
    Text: i18n.t('materialStatus.unknown'),
  },
  {
    Id: MaterialStatusEnum.LegalSeparation,
    Text: i18n.t('materialStatus.legalSeparation'),
  },
  {
    Id: MaterialStatusEnum.Divorced,
    Text: i18n.t('materialStatus.divorced'),
  },
  {
    Id: MaterialStatusEnum.Married,
    Text: i18n.t('materialStatus.married'),
  },
  {
    Id: MaterialStatusEnum.Single,
    Text: i18n.t('materialStatus.single'),
  },
  {
    Id: MaterialStatusEnum.Widowed,
    Text: i18n.t('materialStatus.widowed'),
  },
];
