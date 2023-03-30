export interface PatientQueue_GetListPagingRequest {
    criteria?: PatientQueueSearchCriteria;
    pageIndex?: number;
    pageSize?: number;
    bCountTotal?: boolean;
}

export interface PatientQueueSearchCriteria {
    v_QueueType?: number;
    locationID?: number;
    v_PatientQueueItemStatus?: number;
    staffID?: number;
    orderBy?: string;
}