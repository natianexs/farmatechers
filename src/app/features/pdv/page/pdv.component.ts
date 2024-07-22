import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ListProductsService} from "../../list-products/services/list-products.service";
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";
import {document} from "ngx-bootstrap/utils";



@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrl: './pdv.component.scss'
})
export class PdvComponent implements AfterViewInit {
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

  ngAfterViewInit(): void {
  }

  searchProduct() {
    if(this.searchQuery === ''){
      this.errorMessage = ''
      return;
    }
    const product = this.mockProductSearch(this.searchQuery);
    if (product) {
      this.addProductToSale(product);
      this.currentProduct = product;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Produto não encontrado';
    }
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
    this.barcodeValue = result.codeResult.code;
    const product= this.mockProductSearch('1131667395');
    console.log(result);
    if (product) {
      this.addProductToSale(product);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Produto não encontrado';
    }
    this.isBarcodeScannerVisible = false;
    this.barcodeScanner.stop();
  }


  // onValueChanges(result: any) {
  //   this.barcodeValue = result.codeResult.code;
  //   this.addProductByBarcode(this.barcodeValue);
  //   this.isBarcodeScannerVisible = false;
  //   this.barcodeScanner.stop();
  // }

  onStarted(started: any) {
    console.log('Barcode scanner started', started);
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
    const existingProduct = this.productList.find(p => p.code === product.code);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.productList.push({ ...product, quantity: 1 });
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalValue = this.productList.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  finalizeSale() {
    // Implementar a lógica para finalizar a venda
    console.log('Venda finalizada', this.productList);
    this.productList = [];
    this.totalValue = 0;
  }
}
