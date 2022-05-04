import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e){
      console.error('Error occurred while saving to local storage', e)
    }
  }
  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e){
      console.error('Error occurred while getting to local storage', e);
      return null;
    }
  }
}
