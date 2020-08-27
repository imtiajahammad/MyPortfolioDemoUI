import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutService } from './about.service';
import { HttpClientModule } from '@angular/common/http';
import { AcademicComponent } from './academic/academic.component';
import { AcademicService } from './academic.service';
import { CareerAdjectiveComponent } from './career-adjective/career-adjective.component';
import { CareerAdjective } from './career-adjective';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AcademicComponent,
    CareerAdjectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AboutService,AcademicService,CareerAdjective],
  bootstrap: [AppComponent]
})
export class AppModule { }
