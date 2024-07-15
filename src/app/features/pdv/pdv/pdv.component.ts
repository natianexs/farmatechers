import {Component} from '@angular/core';
import {ListProductsService} from "../../list-medication/services/list-products.service";


@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrl: './pdv.component.scss'
})
export class PdvComponent {

  constructor(private service: ListProductsService) { }

  onBarcodeDetected(code: string): void {
    // Aqui você pode adicionar a lógica para comunicar com o componente de listagem
    const productList = document.querySelector('app-product-list');
    if (productList) {
      const addProductFn = (productList as any).addProduct;
      if (typeof addProductFn === 'function') {
        addProductFn.call(productList, code);
      }
    }
  }
}
