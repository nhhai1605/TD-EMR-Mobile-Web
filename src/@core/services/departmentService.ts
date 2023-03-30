import { Observable, share, Subject } from "rxjs";
import localStorageService from "./localStorageService";

export class DepartmentService {
  private departmentSubject$ = new Subject<{deptID: number, deptLocationID: number}>();

  public departmentChange: Observable<{deptID: number, deptLocationID: number}> = this.departmentSubject$.asObservable().pipe(share());

  constructor() {
    this.departmentSubject$.next({
      deptID: localStorageService.get('deptID'),
      deptLocationID: localStorageService.get('deptLocationID')
    });
  }
  
  setDepartment({deptID,deptLocationID}) {
    this.departmentSubject$.next({deptID,deptLocationID})
    
    localStorageService.set('deptLocationID', deptLocationID);
    localStorageService.set('deptID', deptID);
  }

  getDepartment() {
    return localStorageService.get('deptID')
  }

  getLocation() {
    return localStorageService.get('deptLocationID')
  }

  clearDepartment() {
    this.departmentSubject$.next(null);

    localStorageService.remove('deptID');
    localStorageService.remove('deptLocationID');
  }
}

export default new DepartmentService();