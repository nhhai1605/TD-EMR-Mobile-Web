//Tất cả các enum Vlookup sẽ để tại đây

import i18n from '@core/utils/i18n';

export enum TradingPlacesEnum {
  RegistrationCounter = 53000,
  PharmacyCounter = 53001,
  ConfirmationCounter = 53002,
}
export enum PaymentModeEnum {
  Cash = 4800,
  CreditCard = 4801,
  Transfer = 4802,
}

export enum PaymentTypeEnum {
  //AdvancePayment = 5000,
  PaidEnough = 5001,
  //SplitPayment = 5002,
  Refund = 5003,
}
export const TradingPlacesEnums = [
  {
    Id: TradingPlacesEnum.RegistrationCounter,
    Text: i18n.t('Tại quầy'),
  },
  {
    Id: TradingPlacesEnum.PharmacyCounter,
    Text: i18n.t('Nhà thuốc'),
  },
  {
    Id: TradingPlacesEnum.ConfirmationCounter,
    Text: i18n.t('Quầy xác nhận'),
  }
];
export const PaymentTypeEnums = [
  {
    Id: PaymentTypeEnum.PaidEnough,
    Text: i18n.t('Trả đủ'),
  },
  {
    Id: PaymentTypeEnum.Refund,
    Text: i18n.t('Hoàn tiền'),
  }
];
export const PaymentModeEnums = [
  {
    Id:  PaymentModeEnum.Cash,
    Text: i18n.t('Tiền mặt'),
  },
  {
    Id: PaymentModeEnum.CreditCard,
    Text: i18n.t('Thẻ tín dụng'),
  },
  {
    Id: PaymentModeEnum.Transfer,
    Text: i18n.t('Chuyển khoản'),
  },
];
