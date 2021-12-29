import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Product, ProductsService } from '@bluebits/products';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';

@Component({
  selector: 'admin-products-form',
  templateUrl: './products-form.component.html',
  styles: []
})
export class ProductsFormComponent implements OnInit {
  editmode = false;
  form: FormGroup;
  isSubmitted = false;
  catagories = [];
  imageDisplay: string | ArrayBuffer;
  currentproductId: string;
 
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._getCategories();
    this._checkEditMode();
  
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      countInStock: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      image: ['',Validators.required],
      isFeatured: ['false']
    });
  }

  private _getCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.catagories = categories;
    });
  }

 

 

  onSubmit(){
    this.isSubmitted = true;
    if(this.form.invalid)
      return;
      const productFormdata =  new FormData();
      Object.keys(this.productForm).map((key) => {
        productFormdata.append(key, this.productForm[key].value);
      })
      if(this.editmode){
this._updateproduct(productFormdata);
      }else{
        this._addProduct(productFormdata);
      }
     
    

  }
  onCancle() {}

  onImageUpload(event) {
  const file = event.target.files[0]
  if(file){
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const filereader = new FileReader();
    filereader.onload = ()=>{
      this.imageDisplay = filereader.result;
    }
    filereader.readAsDataURL(file);
  }
  
  }

  get productForm() {
    return this.form.controls;
  }
  private _addProduct(productdata: FormData) {
    this.productsService.createProduct(productdata).subscribe(
      (product: Product) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `product ${product.name} is created!`
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'product is not created!'
        });
      }
    );
  }
  private _updateproduct(productdata: FormData) {
 
      this.productsService.updateProduct(productdata,this.currentproductId).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'product is updated!'
          });
          timer(2000)
            .toPromise()
            .then(() => {
              this.location.back();
            });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'product is not updated!'
          });
        }
      );
    
  
  }
 
    private _checkEditMode() {
      this.route.params.subscribe((params) => {
        if (params.id) {
          this.editmode = true;
          this.currentproductId = params.id;
          this.productsService.getProduct(params.id).subscribe((product) => {
            this.productForm.name.setValue(product.name);
            this.productForm.category.setValue(product.category.id);
            this.productForm.brand.setValue(product.brand);
            this.productForm.price.setValue(product.price);
            this.productForm.countInStock.setValue(product.countInStock);
            this.productForm.isFeatured.setValue(product.isFeatured);
            this.productForm.description.setValue(product.description);
            this.productForm.richDescription.setValue(product.richDescription);
            this.imageDisplay = product.image;
            this.productForm.image.setValidators([]);
            this.productForm.image.updateValueAndValidity();
          });
        }
      });
    }
  

}
