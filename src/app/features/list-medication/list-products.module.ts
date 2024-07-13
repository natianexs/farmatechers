import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { ListProductsComponent } from './page/list-products.component';
import { ListProductsService } from './services/list-products.service';



@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ListProductsModule { }
