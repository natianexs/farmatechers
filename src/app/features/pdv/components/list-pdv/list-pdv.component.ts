import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Products} from "../../../../core/models/products";


@Component({
  selector: 'app-list-pdv',
  templateUrl: './list-pdv.component.html',
  styleUrl: './list-pdv.component.scss'
})
export class ListPdvComponent {
  @Input() productList: Products[] = [];
  @Output() emitterCalculate = new EventEmitter();
  notFoundMessage: string = '';

  constructor() { }

  removeProduct(product: any, index: number) {
    if(product.quantity  <=1){
      this.deleteItem(index);
      return;
    }
    product.quantity -= 1;
    this.emitterCalculate.emit();
  }

  increaseQuantity(product: any) {
    console.log('aaa');
    product.quantity += 1;
    this.emitterCalculate.emit()
  }

  deleteItem(index: number) {
    this.productList.splice(index, 1);
    this.emitterCalculate.emit();
  }

  }
