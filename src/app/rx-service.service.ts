import { Injectable } from '@angular/core';
import { RX } from './rx.interface';
import { RXList } from './example';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RxServiceService {
  rxlist: RX[] = RXList;

  constructor() { }

  getRxList(): Observable<RX[]> {
    const rxlist = of(this.rxlist);
    console.log(this.rxlist + typeof this.rxlist)
    return rxlist;
  }


}
