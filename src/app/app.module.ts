import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Main2Component } from './main2/main2.component';
import { MainComponent } from './main/main.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';
import { Main11Component } from './main11/main11.component';
import { Main19Component } from './main19/main19.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth-guard.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Main2Component,
    ShopdetailsComponent,
    Main11Component,
    Main19Component,
    CartpageComponent,
    CheckoutComponent,
    BlogdetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
