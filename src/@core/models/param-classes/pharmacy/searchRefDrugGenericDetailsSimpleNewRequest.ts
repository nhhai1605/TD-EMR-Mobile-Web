import { DrugSearchCriteria } from "./drugSearchCriteria";

export interface SearchRefDrugGenericDetails_Simple_NewRequest {
    criteria: DrugSearchCriteria;
    pageIndex: number;
    pageSize: number;
    bCountTotal: boolean;
}