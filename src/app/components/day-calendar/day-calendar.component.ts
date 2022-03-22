import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss'],

})

export class DayCalendarComponent implements OnInit {
  @Input() responseDates: any;
  
  constructor(public dp: DatePipe) {

    
  }

  ngOnInit(): void {
   

  }

}

