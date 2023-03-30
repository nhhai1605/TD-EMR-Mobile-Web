export interface CalculateHiBenefit {
    isHavePaperReferal: boolean,
    hiRegistrationCode: string,
    rebatePercentage: number,
    isHICard_FiveYearsCont: boolean,
    isChildUnder6YearsOld: boolean,
    isAllowCrossRegion: boolean,
    isCrossRegion: boolean,
    isEmergInPtReExamination: boolean,
    isEmergency: boolean,
    v_RegistrationType: number,
    fiveYearsAppliedDate: Date | null
}