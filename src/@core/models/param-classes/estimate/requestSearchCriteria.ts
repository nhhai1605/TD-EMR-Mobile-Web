export interface RequestSearchCriteria {
  code?: string;
  staffID?: number;
  supplierID?: number;
  fromDate?: Date;
  toDate?: Date;
  code1?: string;
  isNotOrder?: boolean;
  daNhanHang?: boolean;
  isApproved?: boolean;
  findByApprovedDate?: boolean;
  v_LookupID?: number;
  requestStoreID?: number;
  ptRegistrationID?: number;
}
