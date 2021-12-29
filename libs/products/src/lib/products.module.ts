import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from '@bluebits/orders';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsItemComponent } from './components/products-item/products-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import {ButtonModule} from 'primeng/button';
import { ProductsListComponent } from './pages/products-list/products-list.component'
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';
import {GalleriaModule} from 'primeng/galleria';
import {UiModule} from '@bluebits/ui';
const routes  :Routes=[
  { path: 'products',
   component: ProductsListComponent 
  },
  { path: 'category/:categoryid',
   component: ProductsListComponent 
  },
  { path: 'products/:productid',
  component: ProductsPageComponent 
 }

]
@NgModule({
  imports: [CommonModule,
     OrdersModule,
     RouterModule.forChild(routes),
     ButtonModule,
     GalleriaModule,
     InputNumberModule,
     RatingModule,
     FormsModule,
     CheckboxModule,
     UiModule],
  declarations: [ProductsSearchComponent,
     CategoriesBannerComponent, 
     ProductsItemComponent,
      FeaturedProductsComponent, 
      ProductsListComponent, ProductsPageComponent],
  exports: [ProductsSearchComponent,
     CategoriesBannerComponent, ProductsItemComponent, FeaturedProductsComponent, ProductsListComponent, ProductsPageComponent],
})
export class ProductsModule {}
