import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./pages/header/header.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { EducationComponent } from "./pages/education/education.component";
//import { ServiceComponent } from "./pages/service/service.component";
//import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
//import { ReviewComponent } from "./pages/review/review.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
    { path: '', redirectTo: '/header', pathMatch: 'full' },
    { path: 'header', component: HeaderComponent },
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },    
    //{ path: 'service', component: ServiceComponent },
    //{ path: 'portfolio', component: PortfolioComponent },
    //{ path: 'review', component: ReviewComponent },
    { path: 'contact', component: ContactComponent },    
    { path: '**', component: HeaderComponent, pathMatch: 'full' }    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration : 'enabled' })],
    exports: [RouterModule]    
})
export class AppRoutingModule {}
