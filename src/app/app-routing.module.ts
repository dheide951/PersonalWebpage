import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { ResearchPageComponent } from './research-page/research-page.component'
import { ContactPageComponent } from './contact-page/contact-page.component'
import { ResumePageComponent } from './resume-page/resume-page.component'
const routes: Routes = [
	 { path: '', redirectTo: '/home', pathMatch: 'full' },
	 { path: 'home', component: HomePageComponent },
	 { path: 'resume', component: ResumePageComponent },
	 { path: 'contact', component: ContactPageComponent },
	 { path: 'research', component: ResearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
