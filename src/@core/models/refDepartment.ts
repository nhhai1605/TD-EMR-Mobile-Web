export interface RefDepartment {
  deptID: number;
  parDeptID: number | null;
  deptName: string | null;
  deptShortName: string | null;
  v_DeptTypeOperation: number | null;
  deptDescription: string | null;
  v_DeptType: number;
  isDeleted: boolean;
  selectDeptReqSelectRoom: boolean;
  isAllowableInTemp: boolean;
  deptCode: string | null;
  loadThemDVCuaKhoa: boolean;
}

export interface RefDocument {
  refDocID: number;
  v_RefDocType: number;
  refDocName: string;
  refFilePathLocation: string;
}

export interface RefRole {
  roleCode: number;
  roleDescription: string;
}

export interface RefStaffCategory {
  staffCatgID: number;
  staffCatgDescription: string;
  v_StaffCatType: number;
}

export interface RoomType {
  rmTypeID: number;
  rmTypeName: string | null;
  rmTypeDescription: string | null;
  v_RoomFunction: number;
  isHospitalizedRoom: boolean;
}
