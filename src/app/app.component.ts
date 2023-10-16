import { Component, OnInit } from '@angular/core';
import { RX } from './rx.interface';
import { RxServiceService } from './rx-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Refill_Reminder';

  rxs: any;
  selectedRx?: {};

  constructor(private rxService: RxServiceService) {}

  ngOnit(): void {
    this.getRxList()
  }

  onSelect(rx: RX): void {
    this.selectedRx = rx;

  }

  getRxList(): void{
    localStorage.setItem('prescriptions', JSON.stringify([{id: 0, name: 'examplar', interval: 30, lastFill: "10-01-2023"}]))
    this.rxs = this.rxService.getRxList();
    /*this.rxService.getRxList().subscribe(rx => array.push(rx));*/
    console.log(this.rxs + typeof this.rxs)
  }
}
