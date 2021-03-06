
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
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
