import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxCardComponent } from './rx-card.component';

describe('RxCardComponent', () => {
  let component: RxCardComponent;
  let fixture: ComponentFixture<RxCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxCardComponent]
    });
    fixture = TestBed.createComponent(RxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
