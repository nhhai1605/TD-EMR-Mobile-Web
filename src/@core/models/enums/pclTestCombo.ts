import i18n from "@core/utils/i18n";

export enum PCLTestComboEnum {
  Combo = 28889,
  Group = 28201,
}

export const PCLTestCombos = [
    {
        Id: PCLTestComboEnum.Combo,
        Text: i18n.t("XN theo Combo")
    },
    {
        Id: PCLTestComboEnum.Group,
        Text: i18n.t("XN theo nhóm")
    }
]