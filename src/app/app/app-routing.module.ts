import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { VerifyOtpComponent } from '../components/verify-otp/verify-otp.component';
import { CartComponent } from '../components/cart/cart.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { DetailComponent } from '../components/detail/detail.component';


const routes: Routes = [
  {"path" : "", component : HomeComponent},
  {"path" : "contact-us", component : ContactUsComponent},
  {"path" : "login", component : LoginComponent},
  {"path" : "sign-up", component : SignUpComponent},
  {"path" : "verify-otp", component : VerifyOtpComponent},
  {"path" : "cart", component : CartComponent},
  {"path" : "list", component : ProductListComponent},
  {"path" : "detail", component : DetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
