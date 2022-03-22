import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSchedulesComponent } from './time-schedules.component';

describe('TimeSchedulesComponent', () => {
  let component: TimeSchedulesComponent;
  let fixture: ComponentFixture<TimeSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
