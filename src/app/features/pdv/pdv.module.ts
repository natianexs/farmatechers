import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import {BarcodeScannerLivestreamModule} from "ngx-barcode-scanner";
import {PdvComponent} from "./page/pdv.component";
import {ListPdvComponent} from "./components/list-pdv/list-pdv.component";



@NgModule({
  declarations: [PdvComponent, ListPdvComponent],
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
