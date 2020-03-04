import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TopHeaderComponent } from './common/header/top-header/top-header.component';
import { HeadersComponent } from './common/header/headers/headers.component';
import { HeaderMenuComponent } from './common/header/header-menu/header-menu.component';
import { HeaderMiddleComponent } from './common/header/header-middle/header-middle.component';
import { LeftMenuComponent } from './common/left-menu/left-menu.component';
import { HomeSliderComponent } from './common/home-slider/home-slider.component';
import { HomeComponent } from './home/home.component';
import { BannersComponent } from './common/banners/banners.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewArrivalsComponent } from './common/new-arrivals/new-arrivals.component';
import { FeaturedCategoryComponent } from './common/featured-category/featured-category.component';
import { FeaturedProductsComponent } from './common/featured-products/featured-products.component';
import { CarouselModule, CarouselComponent } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './common/footer/footer.component';
import { OurBrandsComponent } from './common/our-brands/our-brands.component';
import { BestSellerComponent } from './common/best-seller/best-seller.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import  {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterComponent } from './common/filter/filter.component';
import { ListComponent } from './common/list/list.component';
import { DetailComponent } from './detail/detail.component';

const MODULES = [TopHeaderComponent, HeaderMenuComponent, HeadersComponent, HeaderMiddleComponent, LeftMenuComponent, HomeSliderComponent, HomeComponent, BannersComponent, ContactUsComponent,NewArrivalsComponent,FeaturedCategoryComponent, FeaturedProductsComponent, FooterComponent, OurBrandsComponent, BestSellerComponent, LoginComponent, SignUpComponent, VerifyOtpComponent, CartComponent, ProductListComponent, FilterComponent, ListComponent, DetailComponent];

@NgModule({
  declarations: MODULES,
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CarouselModule,
    
  ],
  exports : MODULES
})
export class ComponentsModule { }
