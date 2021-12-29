import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsModule } from '@bluebits/products';
import { UiModule } from '@bluebits/ui';

import { AccordionModule } from 'primeng/accordion';
import { NavComponent } from './shared/nav/nav.component';
import { OrdersModule } from '@bluebits/orders';
import { MessagesComponent } from './shared/messages/messages.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { JwtInterceptor, UsersModule } from '@bluebits/users';
//import { NgxStripeModule } from 'ngx-stripe';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AccordionModule,
    BrowserAnimationsModule,
    UiModule,
    OrdersModule,
    ToastModule,
    UsersModule,
    //NgxStripeModule.forRoot('pk_test_51K85e1SEN7TDNlM6d7NYIhdgPhdjSixol4B6pjiqcqkbIgqlORKzXAAz9Wwx169tuyLqqOg7mudZ4kp7sRdklkox003RzkNcJX')
  ],
  providers: [MessageService,
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
