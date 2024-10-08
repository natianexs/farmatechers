import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { ListProductsComponent } from './page/list-products.component';
import {NgxMaskDirective, NgxMaskPipe} from "ngx-mask";



@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ]
})
export class ListProductsModule { }
