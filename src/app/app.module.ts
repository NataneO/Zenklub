import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { NgxStarRatingModule } from 'ngx-star-rating';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { TimeSchedulesComponent } from './components/profile/time-schedules/time-schedules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    TimeSchedulesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxStarRatingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [DatePipe , { provide: LOCALE_ID, useValue: "pt" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
