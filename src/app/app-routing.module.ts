import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{ path:'',component:HomeComponent },
{ path:'about',component:AboutComponent },
{ path:'services',component:ServicesComponent },
{ path:'industries',component:IndustriesComponent },
{ path:'blog',component:BlogComponent },
{ path:'contact',component:ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const PagesRouting = [

  HomeComponent,
  AboutComponent,
  ServicesComponent,
  IndustriesComponent,
  BlogComponent,
  ContactComponent,


]
