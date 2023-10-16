import { Component, OnInit } from '@angular/core';
import { RX } from '../rx.interface';
import { RxServiceService } from '../rx-service.service';

@Component({
  selector: 'app-rx-card-container',
  templateUrl: './rx-card-container.component.html',
  styleUrls: ['./rx-card-container.component.css']
})
export class RxCardContainerComponent {

  rxs: any;
  selectedRx?: RX;
  rxOpen?: number;
  

  constructor(private rxService: RxServiceService) {}

  ngOnit(): void {
    this.getRxList()
  }

  onSelect(rx: RX): void {
    this.selectedRx = rx;
  }

  getRxList(): void{
    localStorage.setItem('prescriptions', JSON.stringify([
                          {id: 0, name: 'examplar', interval: 30, lastFill: "10-01-2023"},
                          {id: 1, name: 'buenavo', interval: 90, lastFill: "08-15-2023"}
                          ]));
    this.rxs = this.rxService.getRxList();
    console.log(this.rxs + typeof this.rxs)
    /*this.rxService.getRxList().subscribe(rx => array.push(rx));*/
  }

  openPanel(id: number){
    this.rxOpen = id
    console.log('RX ' + id + ' opened');
  }
}