export interface PharmacySellPriceProfitScale_GetList_PagingRequest {
    isActive: boolean;
    pageIndex: number;
    pageSize: number;
    orderBy: string;
    countTotal?: boolean;
}