import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cart } from '../models/cart';
import {cartItem } from '../models/cart'

export const CART_KEY = 'cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart$: BehaviorSubject<cart> = new BehaviorSubject(this.getCart());

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }
  initialcartStroge(){
    const cart:cart = this.getCart();
    if(!cart){
      const initialcart={
        items: []
  }
    const initialcartJson = JSON.stringify(initialcart);
    localStorage.setItem(CART_KEY ,initialcartJson)
  }
}
emptyCart() {
  const initialcart={
    items: []
   }
   const initialcartJson = JSON.stringify(initialcart);
   localStorage.setItem(CART_KEY ,initialcartJson);
   this.cart$.next(initialcart);
  }

  getCart():cart{
    const cartJsonString:string = localStorage.getItem(CART_KEY);
    const cart:cart = JSON.parse(cartJsonString);
    return cart;
  }

  setCartItem(cartItem:cartItem,updatecartItem?:boolean):cart{
    const cart:cart = this.getCart();
  const cartItemexist =cart.items.find((item)=>item.productId === cartItem.productId);
  if(cartItemexist){
    cart.items.map((item)=>{
      if(item.productId === cartItem.productId){
        if(updatecartItem){
          item.quantity = cartItem.quantity;
        }else{
          item.quantity = item.quantity + cartItem.quantity;
        }
        return item;
       
      }
    });

    
  }else{
    cart.items.push(cartItem);
  }
  
    const cartJson = JSON.stringify(cart);
    localStorage.setItem(CART_KEY ,cartJson)
    this.cart$.next(cart);

    return cart;
}
deleteCartItem(productId: string) {
  const cart = this.getCart();
  const newCart = cart.items.filter((item) => item.productId !== productId);

  cart.items = newCart;

  const cartJsonString = JSON.stringify(cart);
  localStorage.setItem(CART_KEY, cartJsonString);

  this.cart$.next(cart);
}

  
}
