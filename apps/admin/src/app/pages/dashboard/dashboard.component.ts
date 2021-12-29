import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from '@bluebits/orders';
import { ProductsService } from '@bluebits/products';
import { UsersService } from '@bluebits/users';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  })
export class DashboardComponent implements OnInit,OnDestroy {
  statistics = [];
  endsubs$: Subject<any> = new Subject();

  constructor( private userService: UsersService,
     private productService: ProductsService,
     private orderService: OrdersService) { }

  ngOnInit(): void {
    combineLatest([
      this.userService.getUsersCount(),
      this.productService.getProductsCount(),
      this.orderService.getOrdersCount(),
      this.orderService.getTotalSales()
    
    ]) .pipe(takeUntil(this.endsubs$))
    .subscribe((values)=>{
      this.statistics = values
    })
  }
  ngOnDestroy(){
    console.log('dashboard destroyed');
    this.endsubs$.complete();

  }

}
