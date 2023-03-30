import { DrugSearchCriteria } from "./drugSearchCriteria";

export interface SearchDrugsRequest {
    criteria: DrugSearchCriteria;
    pageIndex: number;
    pageSize: number;
    bCountTotal: boolean;
}