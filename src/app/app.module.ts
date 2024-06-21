import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SkillComponent } from './components/skill/skill.component';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
//import { ServiceComponent } from './pages/service/service.component';
//import { PortfolioComponent } from './pages/portfolio/portfolio.component';
//import { ReviewComponent } from './pages/review/review.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialsComponent } from './components/socials/socials.component';

import { SidebarService } from './services/sidebar/sidebar.service';
//import { HeaderService } from './services/header/header.service';
import { AboutService } from './services/about/about.service';
//import { ExperienceService } from './services/experience/experience.service';
import { EducationService } from './services/education/education.service';
import { TimelineComponent } from './components/timeline/timeline.component';
//import { ServiceService } from './services/service/service.service';
//import { PortfolioService } from './services/portfolio/portfolio.service';
//import { ReviewService } from './services/review/review.service';
//import { ContactService } from './services/contact/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SocialsComponent,
    SkillComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    TimelineComponent,    
    //ServiceComponent,
    //PortfolioComponent,
    //ReviewComponent,
    ContactComponent,
    FooterComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    NgbModule,
    NgxTypedJsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    SidebarService,
    AboutService,
    EducationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
