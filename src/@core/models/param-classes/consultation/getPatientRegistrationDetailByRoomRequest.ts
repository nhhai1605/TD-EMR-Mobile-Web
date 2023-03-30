export interface GetPatientRegistrationDetailByRoomRequest {
  deptLocationID: number,
  staffID: number,
  pageSize: number,
  pageIndex: number,
  fromDate: Date,
  toDate: Date
}