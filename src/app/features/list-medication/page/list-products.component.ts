import { Component, OnInit } from '@angular/core';
import { ListProductsService } from '../services/list-products.service';
import { Router } from '@angular/router';


export interface Item {
  barCode: string;
  description: string;
  expirationDate?: number;
  price: any; // Defina como `any` se o preço puder ser de diferentes tipos (string ou número)
  quantity: number;
}

export interface Data {
  [key: string]: Item;
}


@Component({
  selector: 'app-list-products',
  templateUrl: './list-Products.component.html',
  styleUrl: './list-Products.component.scss'
})
export class ListProductsComponent implements OnInit {
  products: Data | undefined;
  description = '';
  constructor(private service: ListProductsService, private router: Router) { }
  ngOnInit(): void {
    this.getProducts();
  }

  search() {
    this.getProducts(this.description);
  }

  private getProducts(filter = '') {
    this.service.gelAllProducts(filter).subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }

  deleteItem(key: string) {
    //colocar modal de confirmação
    this.service.deleteProduct(key).subscribe(() => {
      alert('Product deleted successfully');
      this.getProducts();
    });
  }

  editItem(key: string) {
    // , product: Item
    this.router.navigate([`products/${key}`]);
    // this.service.updateProduct(key, product).subscribe(() => {
    //   alert('Product updated successfully');
    // });
  }

}
