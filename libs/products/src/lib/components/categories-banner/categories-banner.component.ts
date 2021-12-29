import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'categories-banner',
  templateUrl: './categories-banner.component.html',
  styles: [
  ]
})
export class CategoriesBannerComponent implements OnInit , OnDestroy{
  categories: Category[] = [];
  endsubs$ : Subject<any> = new Subject();

  constructor( private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService
    .getCategories()
    .pipe(takeUntil(this.endsubs$))
    .subscribe(categories => {
     this.categories = categories
    });

    
     
  }
  ngOnDestroy(){
    this.endsubs$.next();
    this.endsubs$.complete();
  }

}
