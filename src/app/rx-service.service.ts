import { Injectable } from '@angular/core';
import { RX } from './rx.interface';
import { RXList } from './example';
import { LocalStorageService } from './local-storage.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RxCard } from './rxCard';


@Injectable({ providedIn: 'root' })

export class RxServiceService {
  rxlist: RX[] = RXList;

  constructor(private localStorage: LocalStorageService) { }

  getRxList() {
    try {
      console.log('parsing...');
      console.log('Local store returned ' + typeof this.localStorage.getItem('prescriptions'));
      const rxstore = this.localStorage.getItem('prescriptions')!
      const rxlist=  JSON.parse(rxstore) as Array<RX>;
      console.log('rxlist: ' + typeof rxlist + rxlist)
      return rxlist;
    } catch (e) {
      console.log('JSON.parse error: prescriptions', e);
      return this.rxlist;
    }
  }

  saveRxList() {
    this.localStorage.setItem('prescriptions', JSON.stringify(this.rxlist));
  }
}