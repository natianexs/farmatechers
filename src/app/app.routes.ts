import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/page/home-page/home-page.component';
import { RegisterMedicationComponent } from './features/register-medication/page/register-medication.component';
import { ListProductsComponent } from './features/list-products/page/list-products.component';
import {PdvComponent} from "./features/pdv/page/pdv.component";

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'register', component: RegisterMedicationComponent},
    {path: 'products', component: ListProductsComponent},
    {path: 'products/:id', component: RegisterMedicationComponent},
    {path: 'pdv', component: PdvComponent},
];