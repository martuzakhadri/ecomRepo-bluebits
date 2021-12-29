import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'orders-thank-you',
  templateUrl: './thank-you.component.html',
  styles: [
  ]
})
export class ThankYouComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  backToShop(){
   this. router.navigate(['/products']);
  }

}
