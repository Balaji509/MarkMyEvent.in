import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { AppRoutingModule } from './app-routing.module';
import { OurWorkComponent } from './our-work/our-work.component';
import { ServicesComponent } from './services/services.component';
import { VendorComponent } from './vendor/vendor.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeVideoComponent,
    OurWorkComponent,
    ServicesComponent,
    VendorComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
