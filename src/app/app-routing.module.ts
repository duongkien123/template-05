import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { Main11Component } from './main11/main11.component';
import { Main19Component } from './main19/main19.component';
import { Main2Component } from './main2/main2.component';
import { Main5Component } from './main5/main5.component';
import { RegisterComponent } from './register/register.component';
import { ShopdetailsComponent } from './shopdetails/shopdetails.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main2', component: Main2Component},
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuardService]
  },
  {path: 'main5', loadChildren: () => import('./main5/main5.module').then(m => m.Main5Module)},
  {path: 'shopdetails', component: ShopdetailsComponent},
  {path: 'main11', component: Main11Component},
  {path: 'main19', component: Main19Component},
  {path: 'cartpage', component: CartpageComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'blogdetails', component: BlogdetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
