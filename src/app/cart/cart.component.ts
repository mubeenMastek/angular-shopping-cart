import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total: number;
  @Input() products: any[];
  @Output() productRemoved= new EventEmitter();
  calcTotal() {
    return this.products.reduce((sum, prod) => sum+= prod.num ,0)
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    this.total = this.products.reduce((sum, prod) => sum+= (prod.num * prod.price), 0);
  }

  removeProduct(product) {
    this.productRemoved.emit(product)
  }

}
