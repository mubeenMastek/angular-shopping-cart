import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit  } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[];
  filteredProductsList: any[];  
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }  

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this._productService.getProductList().subscribe({
      next:(res) => {
        this.products = res;
        this.filteredProductsList = this.products;
        console.log(this.products);
      },
      error: (err)=> {
        console.log(err);
      }
    });
  }

  filterProductsByTagName(tag:string){  
    if(tag == "All"){
      this.filteredProductsList = this.products;
      return;
    }
    this.filteredProductsList = this.products.filter((product) => {
      console.log(product.tags,tag);
      if(product.tags.includes(tag)){        
        return product;     
      }      
    })
    console.log(this.filteredProductsList);
  }

}
