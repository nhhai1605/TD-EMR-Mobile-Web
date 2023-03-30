import { MainMenu } from '@core/constants/menuConfig';
import { COMMON_ROUTE_PATHS_LIST } from '@core/constants/routeConfig';
import { IMenuItem } from '@core/models/common/menu';
import { TDModuleEnum } from '@core/models/enums/moduleEnums';
import { hasNumber } from '@core/utils/appHelper';
import { BehaviorSubject } from 'rxjs';
import localStorageService from './localStorageService';
export const MODULE_KEY = 'MODULE_KEY';
class ModuleService {
  private moduleSubject$;

  constructor() {
    this.moduleSubject$ = new BehaviorSubject<any>({
      moduleId: hasNumber(localStorageService.get(MODULE_KEY))
        ? localStorageService.get(MODULE_KEY)
        : TDModuleEnum.PatientRegistration,
      autoNavigate: false,
    });
  }

  setModule(moduleId) {
    this.moduleSubject$.next({ moduleId, autoNavigate: true });
    localStorageService.set(MODULE_KEY, moduleId);
  }

  getModuleId = () => this.moduleSubject$.value.moduleId;

  moduleChanged$() {
    return this.moduleSubject$;
  }

  getRoute(moduleId = undefined) {
    const id = moduleId ?? this.getModuleId();
    const menu = MainMenu.filter((item) => item.moduleId === id)[0];
    const routeDefault = menu?.children.find((o) => o.index === true);
    if (!routeDefault) {
      for (const child of menu.children) {
        const route = this.findRoutingCursed(child.children);
        if (!route) continue;
        return route?.navigateTo;
      }
    }
    return routeDefault?.navigateTo ?? menu.navigateTo;
  }

  private findRoutingCursed(menu) {
    const route = menu?.find((o) => o.index === true);
    if (!route && menu?.children && menu?.children.length > 0) {
      this.findRoutingCursed(menu?.children);
    }
    return route;
  }

  detectPathNameExistedInCurrentModule(pathName) {
    const find = (menu: IMenuItem[], pathName) => {
      if (!menu) return false;
      for (const child of menu) {
        if (
          COMMON_ROUTE_PATHS_LIST.some((path) => pathName.includes(path)) ||
          pathName.includes(child.navigateTo) ||
          (child.children?.length > 0 && find(child.children, pathName))
        ) {
          return true;
        }
      }
      return false;
    };
    if (!hasNumber(localStorageService.get(MODULE_KEY))) {
      localStorageService.set(MODULE_KEY, TDModuleEnum.PatientRegistration);
    }
    const moduleId = localStorageService.get(MODULE_KEY);
    const rootMenu = MainMenu.filter((item) => item.moduleId === moduleId)[0];
    const valid = find(rootMenu?.children, pathName);
    if (!valid) {
      return {
        moduleId,
        navigateTo: this.getRoute(moduleId), //return default route in module
      };
    }
    return undefined;
  }
}

export default new ModuleService();
