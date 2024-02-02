import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationControlComponent } from './calibration-control.component';

describe('CalibrationControlComponent', () => {
  let component: CalibrationControlComponent;
  let fixture: ComponentFixture<CalibrationControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalibrationControlComponent]
    });
    fixture = TestBed.createComponent(CalibrationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
