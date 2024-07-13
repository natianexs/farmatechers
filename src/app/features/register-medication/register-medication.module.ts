import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';
import { RegisterMedicationComponent } from './page/register-medication.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RegisterMedicationService } from './services/register-medication.service';

@NgModule({
  declarations: [RegisterMedicationComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // exports: [RegisterMedicationComponent],
  // providers: [provideHttpClient(),  {provide:RegisterMedicationService}]
})
export class RegisterMedicationModule { }
