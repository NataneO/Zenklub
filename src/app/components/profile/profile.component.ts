import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { withLatestFrom } from 'rxjs';
import { Professional } from 'src/models/professional';
import { ProfessionalsService } from 'src/services/professionals/professionals.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public form: FormGroup
  @Input()  responseDates: any;
  professional = {} as Professional;
  times: any[]=[]
  professionals: Professional[];
  professionalsObject: any ;
  responseProfessionals : any ;
  responseTime : any ;
  rating: number;

 ;
  constructor(private http: HttpClientModule, private professionalsService: ProfessionalsService, public dp:DatePipe, private fb:FormBuilder) {
    this.rating = 0;
    
   }

  ngOnInit(): void {
    this.getProfessionals();
  }


  getProfessionals() {
    this.professionalsService.getProfessionals().subscribe((professionals: Professional[]) => {
      this.professionalsObject = professionals;
      this.professionalsObject.map((professionalItem)=>{
  
        let starsCount= 0;
        professionalItem.reviews.map((professionalReview)=>{
           starsCount = starsCount + professionalReview.stars
        })
        let average = starsCount / professionalItem.reviews.length
        this.form = this.fb.group({
          rating: [Math.round(average), Validators.required],
        })
        let id = professionalItem.id
        let timesArray = this.timesArray(id, this.formatTime(professionalItem.start_time), this.formatTime(professionalItem.end_time))
      });
      
      this.professionals = professionals;
    
    });
  }
  getProfessional(id){
console.log(id)
  }
  formatTime(time: string){
  let time_partial: any[]= time.split(':');
   return new Date(1970,0,1, time_partial[0], time_partial[1], time_partial[2]);
  }

  timesArray(idProfessional:number, startTime: Date, endTime:Date){
    let timesByProfessional: any[]= []
    let startHours = startTime.getHours()
    let endHours = endTime.getHours()
    while(startHours <= endHours){
      startHours = startTime.getHours()
      let initTime =  this.dp.transform(startTime, 'HH:mm')
      let finalTime =  this.dp.transform(endTime, 'HH:mm')
  
      timesByProfessional.push({initTime})
      
   
      startTime.setMinutes(startTime.getMinutes()+30)
      }
      this.times.push({idProfessional, timesByProfessional})
      
    }
  }

  