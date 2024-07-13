import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/page/home-page/home-page.component';
import { RegisterMedicationComponent } from './features/register-medication/page/register-medication.component';
import { ListProductsComponent } from './features/list-medication/page/list-products.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'register', component: RegisterMedicationComponent},
    {path: 'products', component: ListProductsComponent},
    {path: 'products/:id', component: RegisterMedicationComponent},
];
