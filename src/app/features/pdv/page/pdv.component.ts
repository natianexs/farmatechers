import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ListProductsService} from "../../list-products/services/list-products.service";
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";
import {Product} from "../../../core/models/products";


@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrl: './pdv.component.scss'
})
export class PdvComponent {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;
  searchQuery: string = '';
  productList: any[] = [];
  barcodeValue: any;
  isBarcodeScannerVisible: boolean = false;
  errorMessage: string = '';
  totalValue: number = 0;
  currentProduct!: any;


  constructor(private service: ListProductsService) { }

  async searchProduct() {
    if(this.searchQuery === ''){
      this.errorMessage = ''
      return;
    }
    this.getproduct(this.searchQuery);
  }

  openBarcodeScanner() {
    this.isBarcodeScannerVisible = !this.isBarcodeScannerVisible;
    if (this.isBarcodeScannerVisible) {
      this.barcodeScanner.start();
    } else {
      this.barcodeScanner.stop();
    }
  }

  onValueChanges(result: any) {
    this.barcodeValue =  result.codeResult.code;
    console.log(result)
    this.getproduct(this.barcodeValue);
    this.isBarcodeScannerVisible = false;
    this.barcodeScanner.stop();
  }

  onStarted(started: any) {
    console.log('Barcode scanner started', started);
  }

  getproduct(query: string) {
    this.service.getProduct(query).subscribe((response: Product) => {
      if (this.extractObj(response)) {
        this.currentProduct = this.extractObj(response);
        this.addProductToSale(this.currentProduct);
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Produto não encontrado';
      }
    });
  }

  extractObj(response: any) {
    const value = response;
    const key = Object.keys(value)[0];
    return value[key];
  }

  mockProductSearch(query: string) {
    // Esta função é um mock. Implemente a lógica real de busca de produtos.
    const products = [
      { code: '1131667395', name: 'Produto 1', price: 10.00 },
      { code: '987654321', name: 'Produto 2', price: 15.00 },
      { code: '111213141', name: 'Produto 3', price: 20.00 }
    ];
    return products.find(product => product.code === query);
  }

  addProductToSale(product: any) {
    const existingProduct = this.productList.find(p => p.barCode === product.barCode);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.productList.push({ ...product, quantity: 1 });
    }
    this.calculateTotal();
  }

  calculateTotal():void {
    this.totalValue = this.productList.reduce((total, product) => total + (parseFloat(product.price) * product.quantity), 0);
    if(this.totalValue <= 1){
      this.currentProduct = null;
      this.searchQuery= ''
      }
  }

  finalizeSale() {
    // Implementar a lógica para finalizar a venda
    console.log('Venda finalizada', this.productList);
    this.productList = [];
    this.totalValue = 0;
  }
}
