import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import {PdvComponent} from "./pdv/pdv.component";
import {BarcodeScannerComponent} from "./pdv/components/barcode-scanner/barcode-scanner.component";
import {ListPdvComponent} from "./pdv/components/list-pdv/list-pdv.component";
import {BarcodeScannerLivestreamModule} from "ngx-barcode-scanner";



@NgModule({
  declarations: [PdvComponent, BarcodeScannerComponent, ListPdvComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    BarcodeScannerLivestreamModule
  ]
})
export class PdvModule { }
