import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/page/home-page/home-page.component';
import { RegisterMedicationComponent } from './features/register-medication/page/register-medication.component';
import { ListProductsComponent } from './features/list-products/page/list-products.component';
import {PdvComponent} from "./features/pdv/page/pdv.component";
import {LoginComponent} from "./features/login/page/login/login.component";
import {AuthGuard} from "./core/interceptors/auth.guard";
import {inject} from "@angular/core";

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomePageComponent,canActivate: [() => inject(AuthGuard).canActivate()]},
    {path: 'register', component: RegisterMedicationComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
    {path: 'products', component: ListProductsComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
    {path: 'products/:id', component: RegisterMedicationComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
    {path: 'pdv', component: PdvComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
];
