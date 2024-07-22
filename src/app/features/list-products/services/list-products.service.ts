import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/products';


@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  constructor(private httpClient:HttpClient) { }

  gelAllProducts(filter:string): Observable<Product> {
    const query = filter ? `?orderBy="barCode"&equalTo="${filter}"` : '';
    return this.httpClient.get<Product>(`https://farmatech-27e91-default-rtdb.firebaseio.com/Products/.json${query}`);
  }

  deleteProduct(key: string): Observable<void> {
    return this.httpClient.delete<void>(`https://farmatech-27e91-default-rtdb.firebaseio.com/Products/${key}.json`);
  }

  getProduct(barcode: string) {
    return this.httpClient.get<Product>(`https://farmatech-27e91-default-rtdb.firebaseio.com/Products/.json?orderBy="barCode"&equalTo=${barcode}`);
  }

}
