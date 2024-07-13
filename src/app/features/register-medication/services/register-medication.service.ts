import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterMedicationService {

  constructor(private httpClient: HttpClient) { }

  createRegisterMedication(data: any) {
    return this.httpClient.post(' https://farmatech-27e91-default-rtdb.firebaseio.com/Products/.json', data);
  }

  getRegisterMedication(key: string): Observable<Data> {
    return this.httpClient.get<Data>(`https://farmatech-27e91-default-rtdb.firebaseio.com/Products/${key}.json`);
  }

  updateProduct(key: string, product: Data): Observable<void> {
    return this.httpClient.put<void>(`https://farmatech-27e91-default-rtdb.firebaseio.com/Products/${key}.json`, product);
  }
}
