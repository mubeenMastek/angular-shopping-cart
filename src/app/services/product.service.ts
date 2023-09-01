import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL = '../assets/products.json';

  constructor(private _http:HttpClient) { }

  getProductList():Observable<any>{
    return this._http.get(this.URL);
  }
  

  getAllTag():any{
    return [
      {name:'All', count:6},
      {name:'Unisex', count:2},
      {name:'Mens', count:4},
      {name:'Womens', count:2}      
    ]
  }
}
