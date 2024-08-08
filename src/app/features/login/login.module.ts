import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import {RouterModule} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";
import {AuthGuard} from "../../core/interceptors/auth.guard";
import {LoginComponent} from "./page/login/login.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    RouterModule,
    LoginComponent,
  ],
  providers: [AuthGuard, AuthService]
})
export class LoginModule { }
