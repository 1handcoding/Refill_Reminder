import { Component } from '@angular/core';
import { RX } from '../rx.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-rx-card',
  templateUrl: './rx-card.component.html',
  styleUrls: ['./rx-card.component.css']
})
export class RxCardComponent {

  @Input() rx!: RX
}
