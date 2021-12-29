import { OrderItem } from './../../models/order-item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { UsersService } from '@bluebits/users';
import { cart } from '../../models/cart';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';
import { ORDER_STATUS } from '../../order.constants';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
//import { StripeService } from 'ngx-stripe';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styles: []
})
export class CheckOutComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  isSubmitted = false;
  orderItems: OrderItem[] = [];
  countries = [];
  userId: string;
  unsubscribe$: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private usrService: UsersService,
    private orderService: OrdersService
  ) // private stripeService: StripeService

  {}

  ngOnInit(): void {
    this.initcheckoutForm();
    this.getCartItems();
    this.getCountries();
    this.autoFillUserData();
  }
  private autoFillUserData() {
    this.usrService
      .observeCurrentUser()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        if (user) {
          this.userId = user.id;
          this.checkoutForm.name.setValue(user.name);
          this.checkoutForm.email.setValue(user.email);
          this.checkoutForm.phone.setValue(user.phone);
          this.checkoutForm.city.setValue(user.city);
          this.checkoutForm.street.setValue(user.street);
          this.checkoutForm.country.setValue(user.country);
          this.checkoutForm.zip.setValue(user.zip);
          this.checkoutForm.apartment.setValue(user.apartment);
        }
      });
  }

  private initcheckoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      name: ['Name1', Validators.required],
      email: ['email@email.com', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      apartment: ['', Validators.required],
      street: ['', Validators.required]
    });
  }

  private getCartItems() {
    const cart: cart = this.cartService.getCart();
    this.orderItems = cart.items.map((item) => {
      return {
        product: item.productId,
        quantity: item.quantity
      };
    });
    console.log(this.orderItems);
  }
  private getCountries() {
    this.countries = this.usrService.getCountries();
  }

  backToCart() {
    this.router.navigate(['/cart']);
  }
  get checkoutForm() {
    return this.checkoutFormGroup.controls;
  }

  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }
    // this.orderService.createCheckoutSession(this.orderItems).subscribe(session=>{
    // console.log(session);
    //})
    const order: Order = {
      orderItems: this.orderItems,
      shippingAddress1: this.checkoutForm.street.value,
      shippingAddress2: this.checkoutForm.apartment.value,
      city: this.checkoutForm.city.value,
      zip: this.checkoutForm.zip.value,
      country: this.checkoutForm.country.value,
      phone: this.checkoutForm.phone.value,
      status: 0,
      user: this.userId,
      dateOrdered: ` ${new Date()}`
    };
    this.orderService.createorder(order).subscribe(
      () => {
        //redirect to thank u page
        this.cartService.emptyCart();
        this.router.navigate(['/success']);
      },
      () => {
        //show error message
      }
    );
   }
}
