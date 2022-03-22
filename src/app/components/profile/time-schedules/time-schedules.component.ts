import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time-schedules',
  templateUrl: './time-schedules.component.html',
  styleUrls: ['./time-schedules.component.scss']
})
export class TimeSchedulesComponent implements OnInit {
  @Input() responseDates: any;
  @Input() responseTime: any;
  @Input() professionalId: any;
  @Input() sessionTime: any;

  dates: any[] = [];

  initialDate = new Date();
  nextDate = new Date();
  i = new Date()

  constructor(public dp: DatePipe) {

    this.nextDate.setDate(this.nextDate.getDate() + 10);
  }

  ngOnInit(): void {
    while (this.initialDate < this.nextDate) {
      let weekDay =  this.dp.transform(this.initialDate, 'EE')
      let currentDate = this.dp.transform(this.initialDate, 'MMM dd')
      this.dates.push({weekDay, currentDate})
      this.initialDate.setDate(this.initialDate.getDate() + 1);
    }
  }

}


