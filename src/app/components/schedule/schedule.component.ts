import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],

})



export class ScheduleComponent implements OnInit {


  dates: any[] = [];


  professionalProfile: any[] = [];
  initialDate = new Date();
  nextDate = new Date();
  i = new Date()

  constructor(public dp: DatePipe) {

    this.nextDate.setDate(this.nextDate.getDate() + 10);
  }

  ngOnInit(): void {
    while (this.initialDate < this.nextDate) {
      let currentDate = this.dp.transform(this.initialDate, 'EE MMM dd')
      this.dates.push(currentDate)
      this.initialDate.setDate(this.initialDate.getDate() + 1);
    }

  }

}

