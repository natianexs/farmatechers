import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RegisterMedicationComponent } from './page/register-medication.component';
import { HttpClientModule } from '@angular/common/http';

import {NgxMaskDirective} from "ngx-mask";

@NgModule({
  declarations: [RegisterMedicationComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxMaskDirective
    ],
})
export class RegisterMedicationModule { }
