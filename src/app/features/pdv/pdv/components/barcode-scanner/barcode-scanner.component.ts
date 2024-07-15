import {Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild} from '@angular/core';
import Quagga from "@ericblade/quagga2";
import {BarcodeScannerLivestreamComponent} from "ngx-barcode-scanner";

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrl: './barcode-scanner.component.scss'
})
export class BarcodeScannerComponent implements OnInit, OnDestroy {
  @Output() codeDetected = new EventEmitter<string>();

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    Quagga.stop();
  }

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue!:any;

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result:any) {
    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started:any) {
    console.log(started);
  }
}
