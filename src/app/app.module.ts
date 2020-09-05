import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutService } from './about.service';
import { HttpClientModule } from '@angular/common/http';
import { AcademicComponent } from './academic/academic.component';
import { AcademicService } from './academic.service';
import { CareerAdjectiveComponent } from './career-adjective/career-adjective.component';
import { CareerAdjective } from './career-adjective';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceService } from './experience.service';
import { SelfImageComponent } from './self-image/self-image.component';
import { SelfImageService } from './self-image.service';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './project.service';
import { SkillComponent } from './skill/skill.component';
import { SkillService } from './skill.service';
import {FormsModule} from '@angular/forms';
import { AboutAdminComponent } from './about-admin/about-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
/*import { ClientPanelComponent } from './client-panel/client-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';*/

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AcademicComponent,
    CareerAdjectiveComponent,
    ExperienceComponent,
    SelfImageComponent,
    ProjectComponent,
    SkillComponent,
    /*ClientPanelComponent,
    AdminPanelComponent*/
    routingComponents,
    AboutAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [AboutService,AcademicService,CareerAdjective,ExperienceService,SelfImageService,ProjectService,SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
