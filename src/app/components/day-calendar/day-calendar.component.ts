import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss'],

})



export class DayCalendarComponent implements OnInit {
 
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

