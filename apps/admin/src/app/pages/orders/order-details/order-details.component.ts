import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrdersService,ORDER_STATUS } from '@bluebits/orders';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'admin-order-list',
  templateUrl: './order-details.component.html',
  styles: [
  ]
})
export class OrderDetailsComponent implements OnInit {
  orderStatuses = [];
  order :Order;
  selectedStatus: any;
  endsubs$: Subject<any> = new Subject();
  constructor( private orderservice: OrdersService,
    private messageService: MessageService,
     private router:ActivatedRoute) { }
  

  ngOnInit(): void {
    this._getOrder();
    this._mapOrderStatus();
  }
  private _mapOrderStatus() {
    this.orderStatuses = Object.keys(ORDER_STATUS).map((key) => {
      return {
        id: key,
        name: ORDER_STATUS[key].label
      };
    });
  }


  private _getOrder(){
    this.router.params.subscribe((params)=>{
      if(params.id){
        this.orderservice
        .getOrder(params.id)
        .subscribe((order)=>{
          this.order = order;
          this.selectedStatus = order.status;
        });
      }
    })

  }
  onStatusChange(event) {
    this.orderservice
      .updateorder({ status: event.value }, this.order.id)
      .pipe(takeUntil(this.endsubs$))
      .subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Order is updated!'
          });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Order is not updated!'
          });
        }
      );
  }

}
