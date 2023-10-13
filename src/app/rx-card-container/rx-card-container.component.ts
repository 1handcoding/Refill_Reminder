import { Component, OnInit } from '@angular/core';
import { RX } from '../rx.interface';
import { RxServiceService } from '../rx-service.service';

@Component({
  selector: 'app-rx-card-container',
  templateUrl: './rx-card-container.component.html',
  styleUrls: ['./rx-card-container.component.css']
})
export class RxCardContainerComponent {

  rxs: RX[] = [];
  selectedRx?: {};

  constructor(private rxService: RxServiceService) {}

  ngOnit(): void {
    this.getRxList()
  }

  onSelect(rx: RX): void {
    this.selectedRx = rx;

  }

  getRxList() {
    let array: RX[]= [];
    /*this.rxService.getRxList().subscribe(rx => array.push(rx));*/
    this.rxs = array;
    return this.rxs;
  }
}
