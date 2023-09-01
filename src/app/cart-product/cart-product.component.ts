import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMore = () => {
    this.product.num++;
  };

  toggleLess = () => {
    if (this.product.num === 0) {
      this.productRemoved.emit(this.product)
     }
    this.product.num--;
  };

}
