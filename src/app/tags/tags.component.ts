import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags: any = [];
  @Output() filterProducts = new EventEmitter();
  tagClick(tag) {
    this.filterProducts.emit(tag);
  }

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this.tags = this._productService.getAllTag();
  }
  

}
