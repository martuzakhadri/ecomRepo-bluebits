import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  products :Product[] = [];
  categories: Category[] = [];
  iscategoyPage: boolean;
  constructor( private product:ProductsService,
    private catService:CategoriesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
    params.categoryid ?this.getproducts([params.categoryid]) : this.getproducts();
    params.categoryid ? (this.iscategoyPage = true) : (this.iscategoyPage = false);
    })
   
    this.getcategory();
  }
  private getproducts(categoryfilter?:string[]){
    this.product.getProducts(categoryfilter).subscribe(res => {
        this.products = res;
      });
  }

  private getcategory(){
    this.catService.getCategories().subscribe(res => {
        this.categories = res;
      });

  }

  categoryfilter(){
   const selectedcat = this.categories.filter((category)=>category.checked).map((category) =>category.id)
   console.log(selectedcat);
    this.getproducts(selectedcat);
  }

}
