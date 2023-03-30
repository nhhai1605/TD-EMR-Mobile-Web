import i18n from "@core/utils/i18n";

// configID
export enum RefApplicationConfigs {
  eInvoicePatern = 301, 
  eInvoiceSerial = 302
}

// configValue
export const RefApplicationConfigsDescription = new Map<number, string>(
  [
    [RefApplicationConfigs.eInvoicePatern, i18n.t("123")],
    [RefApplicationConfigs.eInvoiceSerial, i18n.t("123")]
  ]
)