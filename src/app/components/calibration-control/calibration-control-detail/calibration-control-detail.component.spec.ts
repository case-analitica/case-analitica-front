import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationControlDetailComponent } from './calibration-control-detail.component';

describe('CalibrationControlDetailComponent', () => {
  let component: CalibrationControlDetailComponent;
  let fixture: ComponentFixture<CalibrationControlDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalibrationControlDetailComponent]
    });
    fixture = TestBed.createComponent(CalibrationControlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
