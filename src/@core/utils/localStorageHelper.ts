export class LocalStorageHelper {
  
    static getItem<T>(key: string): T {
      if (localStorage[key]) {
        return <T>JSON.parse(localStorage[key]);
      }
      return null;
    }
  
    static setItem(key: string, item: any) {
      localStorage[key] = JSON.stringify(item);
    }
  
    static removeItem(key: string) {
      localStorage.removeItem(key);
    }
  
  }
  