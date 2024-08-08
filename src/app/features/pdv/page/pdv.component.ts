import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ListProductsService } from "../../list-products/services/list-products.service";
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";
import { Product } from "../../../core/models/products";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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

  private barcodeSubject: Subject<string> = new Subject<string>();

  constructor(private service: ListProductsService) { }

  ngAfterViewInit() {
    this.barcodeSubject.pipe(
      debounceTime(300) // Espera 300ms antes de processar o valor
    ).subscribe(code => {
      this.getproduct(code);
      this.isBarcodeScannerVisible = false;
      this.barcodeScanner.stop();
    });
  }

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
    console.log(this.barcodeValue);
    this.barcodeSubject.next(this.barcodeValue); // Emite o valor do código de barras para o Subject
  }

  onStarted(started: any) {
    console.log('Barcode scanner started', started);
  }

  getproduct(query: string) {
    this.service.getProduct(query).subscribe((response: Product) => {
      if (this.extractObj(response)) {
        this.currentProduct = this.extractObj(response);
        console.log(this.currentProduct);
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

  addProductToSale(product: any) {
    const existingProduct = this.productList.find(p => p.barCode === product.barCode);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.productList.push({ ...product, quantity: 1 });
    }
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalValue = this.productList.reduce((total, product) => total + (parseFloat(product.price) * product.quantity), 0);
    if(this.totalValue <= 1){
      this.currentProduct = null;
      this.searchQuery = ''
    }
  }

  finalizeSale() {
    this.productList = [];
    this.currentProduct = [];
    this.totalValue = 0;
    this.searchQuery = ''
    alert("Venda realizada com sucesso")
  }
}
