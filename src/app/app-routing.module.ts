import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeVideoComponent } from './home-video/home-video.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ServicesComponent } from './services/services.component';
import { VendorComponent } from './vendor/vendor.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'v2/home', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeVideoComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
