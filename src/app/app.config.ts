import { ApplicationConfig } from '@angular/core';
import {provideRouter, RouterOutlet} from '@angular/router';

import { routes } from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideHttpClient, withFetch} from '@angular/common/http';
import { RegisterMedicationModule } from './features/register-medication/register-medication.module';
import { ListProductsModule } from './features/list-medication/list-products.module';
import {provideEnvironmentNgxMask} from "ngx-mask";
import {SidebarModule} from "./features/sidebar/sidebar.module";
import {SharedModule} from "./shared/shared.module";
import {CommonModule} from "@angular/common";
import {HomeModule} from "./features/home/home.module";
import {PdvModule} from "./features/pdv/pdv.module";



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    PdvModule,
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
