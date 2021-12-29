import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'order-summery',
  templateUrl: './order-summery.component.html',
  styles: [
  ]
})
export class OrderSummeryComponent implements OnInit , OnDestroy{
  endsubs$: Subject<any> = new Subject();
  totalPrice:number;
  ischeckout = false;

  constructor( private cartService: CartService,
     private orderService: OrdersService,
     private router: Router) {
       this.router.url.includes('checkout') ? this.ischeckout = true : this.ischeckout = false;
      }

  ngOnInit(): void {
  this.getOrderSummery();
  }

  ngOnDestroy(): void {
    this.endsubs$.next();
    this.endsubs$.complete();
  }



  private getOrderSummery(){
    this.cartService.cart$.pipe(takeUntil(this.endsubs$)).subscribe(cart => {
this.totalPrice = 0;
if(cart){
  cart.items.map((item)=>{
    this.orderService.getProduct(item.productId).pipe(take(1)).subscribe(product => {
      this.totalPrice +=product.price * item.quantity;
    })

  })
}


    })

  }

  gotocheckout(){
this.router.navigate(['/checkout'])
  }

}


