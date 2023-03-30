export interface RefDepartment {
  deptID?: number;
  parDeptID?: number;
  deptName?: string;
  deptShortName?: string;
  v_DeptTypeOperation?: number;
  deptDescription?: string;
  v_DeptType?: number;
  isDeleted?: boolean;
  selectDeptReqSelectRoom?: boolean;
  isAllowableInTemp?: boolean;
  deptCode?: string;
  loadThemDVCuaKhoa?: boolean;
}

export interface RefDocument {
  refDocID?: number;
  v_RefDocType?: number;
  refDocName?: string;
  refFilePathLocation?: string;
}

export interface RefRole {
  roleCode?: number;
  roleDescription?: string;
}

export interface RefStaffCategory {
  staffCatgID?: number;
  staffCatgDescription?: string;
  v_StaffCatType?: number;
}

export interface RoomType {
  rmTypeID?: number;
  rmTypeName?: string;
  rmTypeDescription?: string;
  v_RoomFunction?: number;
  isHospitalizedRoom?: boolean;
}
