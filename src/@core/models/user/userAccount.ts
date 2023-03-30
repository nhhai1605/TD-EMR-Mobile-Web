import { RefDepartment } from '../reference/refDepartment';
import { Staff } from '../staff';
import { Group } from './group';

export interface UserAccount {
  accountPasswordConfirm?: string;
  pKHUsNm?: string;
  pKHID?: number;
  deptIDResponsibilityList?: number[];
  allStaffDeptResponsibilities?: StaffDeptResponsibilities[];
  isActivated?: boolean;
  staff?: Staff;
  staffID?: number;
  lastLogin?: string;
  accountPassword?: string;
  accountName?: string;
  accountID?: number;
  userGroups?: Group[];
}

export interface UserLoginHistory {
  loggedHistoryID?: number;
  accountID?: number;
  logDateTime?: string;
  hostName?: string;
  tempHostName?: string;
  hostIPV4?: string;
  userAccount?: UserAccount;
}

export interface StaffDeptResponsibilities {
  staff?: Staff;
  resKhoNoiTru?: boolean;
  resTraGiuong?: boolean;
  resXuatVien?: boolean;
  resDatGiuong?: boolean;
  resNhapVien?: boolean;
  isDeleted?: boolean;
  recCreatedDate?: string;
  responsibilities_32?: number;
  deptID?: number;
  staffID?: number;
  staffDeptResponsibilitiesID?: number;
  refDepartment?: RefDepartment;
}
