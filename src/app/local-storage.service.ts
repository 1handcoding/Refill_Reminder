import { Injectable } from '@angular/core';
import { RX } from './rx.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  prescription = {} as RX;
  prescriptions: RX[] = [];

  data = [
    {id: 'prescriptions', key: this.prescriptions}
  ]

  getItem(key:string) {
    let item = localStorage.getItem(key);
    console.log("retrieved " + typeof item)
    return item;
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
