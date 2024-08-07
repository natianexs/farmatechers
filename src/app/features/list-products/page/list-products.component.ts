import { Component, OnInit } from '@angular/core';
import { ListProductsService } from '../services/list-products.service';
import { Router } from '@angular/router';
import {Product} from "../../../core/models/products";


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent implements OnInit {
  products!: Product;
  description = '';
  constructor(private service: ListProductsService, private router: Router) { }
  ngOnInit(): void {
    this.getProducts();
  }

  search() {
    this.getProducts(this.description);
  }

  private getProducts(filter = '') {
    this.service.gelAllProducts(filter).subscribe((products:Product) => {
      this.products = products;
    });
  }

  deleteItem(key: string) {
    //colocar modal de confirmação
    this.service.deleteProduct(key).subscribe(() => {
      alert('Produto deletado com sucesso');
      this.getProducts();
    });
  }

  editItem(key: string) {
    this.router.navigate([`products/${key}`]);
  }

}
