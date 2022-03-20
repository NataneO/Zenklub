import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/models/professional';
import { ProfessionalsService } from 'src/services/professionals/professionals.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  readonly apiURL : string | undefined;
  bla : any[] = [];
  ble: 2 = 2;

  professional = {} as Professional;
  professionals: Professional[];
constructor(private http : HttpClientModule,private professionalsService: ProfessionalsService){} 

  ngOnInit(): void {
    this.getProfessionals();
  }




getProfessionals() {
  this.professionalsService.getProfessionals().subscribe((professionals: Professional[]) => {
    this.professionals = professionals;
  });
}

deleteCar(professional: Professional) {
  this.professionalsService.deleteProfessional(professional).subscribe(() => {
    this.getProfessionals();
  });
}


editProfessional(professional: Professional) {
  this.professional = { ...professional };
}

}





