import { EntityStateEnum } from './enums/entityState';
import { RoomType } from './refDepartment';

export interface Location {
  deptID?: number;
  lID: number;
  rmTypeID: number | null;
  locationName: string | null;
  locationDescription: string | null;
  v_LocationType: number | null;
  deptLocationID: number;
  roomType: RoomType | null;
  isChecked: boolean;
  entityState: EntityStateEnum;
}
