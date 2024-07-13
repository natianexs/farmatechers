import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AlertModalComponent} from "./components/alert-modal/alert-modal.component";
import {AlertModule} from "ngx-bootstrap/alert";


@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
  ],
  exports: [AlertModalComponent],
})
export class SharedModule { }
