import { ApplicationConfig } from '@angular/core';
import {provideRouter, RouterOutlet} from '@angular/router';

import { routes } from './app.routes';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { RegisterMedicationModule } from './features/register-medication/register-medication.module';
import { ListProductsModule } from './features/list-medication/list-products.module';
import {provideEnvironmentNgxMask} from "ngx-mask";
import {SidebarModule} from "./features/sidebar/sidebar.module";
import {SharedModule} from "./shared/shared.module";
import {CommonModule} from "@angular/common";
import {HomeModule} from "./features/home/home.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

;


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    RegisterMedicationModule,
    SidebarModule,
    HomeModule,
    SharedModule,
    ListProductsModule,
    CommonModule, RouterOutlet,
    provideEnvironmentNgxMask(),
    provideHttpClient(withFetch()),
  ],
};
