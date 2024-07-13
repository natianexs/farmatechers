import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  constructor(private httpClient:HttpClient) { }

  gelAllProducts(filter:string): Observable<Data> {
    const query = filter ? `?orderBy="barCode"&equalTo="${filter}"` : '';
    return this.httpClient.get<Data>(`https://farmatech-27e91-default-rtdb.firebaseio.com/Products/.json${query}`);
  }

  deleteProduct(key: string): Observable<void> {
    return this.httpClient.delete<void>(`https://farmatech-27e91-default-rtdb.firebaseio.com/Products/${key}.json`);
  }

}
