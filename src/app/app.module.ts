import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path :"",
    component :SignupComponent
  },
  {
    path :"login",
    component :LoginComponent
  },
  {
    path :"fooditems",
    component :FoodItemsComponent
  },
  {
    path :"contact",
    component :ContactUsComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FoodItemsComponent,
    ContactUsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
