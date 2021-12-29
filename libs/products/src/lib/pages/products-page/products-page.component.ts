import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService, cartItem } from '@bluebits/orders';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-products-page',
  templateUrl: './products-page.component.html',
  styles: [
  ]
})
export class ProductsPageComponent implements OnInit , OnDestroy{

  product : Product;
  endsubs$:Subject<any> = new Subject();
  Quantity=1;
  constructor( private productService:ProductsService, private route: ActivatedRoute,
     private cartService:CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params.productid){
        this._getproduct(params.productid);
      }
    })
  }
  ngOnDestroy(){
    this.endsubs$.next();
    this.endsubs$.complete();
  }

  private _getproduct(id:string){
    this.productService.getProduct(id).pipe(takeUntil(this.endsubs$)).subscribe((product)=>{
      this.product = product;
    })
  }
  addTocart(){
   const cartItem:cartItem={
productId:this.product.id,
quantity:this.Quantity,
   }
   this.cartService.setCartItem(cartItem);
    
  }
 

}
