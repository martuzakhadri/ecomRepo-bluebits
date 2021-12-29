import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import { CartService } from './services/cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import {BadgeModule} from 'primeng/badge';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummeryComponent } from './components/order-summery/order-summery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { AuthGuard, UsersModule } from '@bluebits/users';



const routes: Routes = [
  {
     path: 'cart', component: CartPageComponent 
},
{
  path: 'checkout',
  canActivate: [AuthGuard],
   component: CheckOutComponent 
},
{
  path: 'success', component: ThankYouComponent 
}
]
@NgModule({
  imports: [CommonModule,BadgeModule,
    RouterModule.forChild(routes),
    ButtonModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    InputTextModule,
    DropdownModule,
    UsersModule

   ],
  declarations: [CartIconComponent, CartPageComponent, OrderSummeryComponent, CheckOutComponent, ThankYouComponent],
  exports: [CartIconComponent, CartPageComponent, OrderSummeryComponent, CheckOutComponent, ThankYouComponent],
})
export class OrdersModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(cartService:CartService) {
    cartService.initialcartStroge();

  }
}
