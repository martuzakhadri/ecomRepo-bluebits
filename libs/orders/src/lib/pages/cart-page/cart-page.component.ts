import { cartItem } from '@bluebits/orders';
import { OrdersService } from './../../services/orders.service';
import { pipe, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { cartItemDetails } from '../../models/cart';
import { take, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'orders-cart-page',
  templateUrl: './cart-page.component.html',
  styles: [
  ]
})
export class CartPageComponent implements OnInit, OnDestroy{
  cartItemsDetail :cartItemDetails [] = [];
  cartCount = 0;
  endsubs$ : Subject<any> = new Subject();
  constructor( private router: Router, 
    private cartService: CartService, 
    private OrdersService: OrdersService,
   
   ) { }
   

  ngOnInit(): void {
    this._getcartDetails();
  }
  ngOnDestroy(){
    this.endsubs$.next();
    this.endsubs$.complete();
  }
   private _getcartDetails(){
this.cartService.cart$.pipe(takeUntil(this.endsubs$)).subscribe(res => {
  this.cartItemsDetail = [];
  this.cartCount = res?.items.length;
  res.items.forEach((cartItem) => {
    this.OrdersService.getProduct(cartItem.productId).subscribe(product => {
  this.cartItemsDetail.push({
    product: product,
    quantity: cartItem.quantity
  })
    })
    
  });
});
  }


  backToShop(){
    this.router.navigate(['/products'])
  }

  deleteCartItem(cartItem:cartItemDetails){
    this.cartService.deleteCartItem(cartItem.product.id);
   

  }

  updatecartItemquantity(event,cartItem:cartItemDetails){
  this.cartService.setCartItem({
    productId: cartItem.product.id,
    quantity: event.value
  },
  true
  );
  }
}


