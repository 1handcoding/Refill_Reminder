import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxCardContainerComponent } from './rx-card-container.component';

describe('RxCardContainerComponent', () => {
  let component: RxCardContainerComponent;
  let fixture: ComponentFixture<RxCardContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxCardContainerComponent]
    });
    fixture = TestBed.createComponent(RxCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
