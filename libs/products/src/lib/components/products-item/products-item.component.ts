import { Component, Input, OnInit } from '@angular/core';
import { CartService,cartItem } from '@bluebits/orders';
import { Product } from '../../models/product';

@Component({
  selector: 'products-item',
  templateUrl: './products-item.component.html',
  styles: [
  ]
})
export class ProductsItemComponent implements OnInit {
  @Input() product:Product;

  constructor( private cartService:CartService) { }

  ngOnInit(): void {}

  addToCart(){
    const cartItem:cartItem ={
      productId:this.product.id,
      quantity:1
    };
    this.cartService.setCartItem(cartItem);
      
  }

}
