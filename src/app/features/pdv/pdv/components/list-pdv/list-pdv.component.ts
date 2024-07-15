import {Component, OnInit} from '@angular/core';
import {ListProductsService} from "../../../../list-medication/services/list-products.service";
import {Product} from "../../../../../core/models/products";

@Component({
  selector: 'app-list-pdv',
  templateUrl: './list-pdv.component.html',
  styleUrl: './list-pdv.component.scss'
})
export class ListPdvComponent implements OnInit {
  products: Product[] = [];
  notFoundMessage: string = '';

  constructor(private service: ListProductsService){}

  ngOnInit(): void { }

  addProduct(product: string): void {
    const productName:any = this.service.getProduct(product).subscribe(()=>{});
    if (productName) {
      this.products.push(productName);
      this.notFoundMessage = '';
    } else {
      this.notFoundMessage = 'Produto não encontrado';
    }
  }
}
