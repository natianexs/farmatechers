import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RegisterMedicationModule } from './features/register-medication/register-medication.module';
import { ListProductsModule } from './features/list-medication/list-products.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    RegisterMedicationModule,
    ListProductsModule,
    provideHttpClient(withFetch()),
  ],
};
