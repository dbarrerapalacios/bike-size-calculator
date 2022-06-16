import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalLayoutComponent } from './layouts/principal-layout/principal-layout.component';
import { BikeSizeComponent } from './views/bike-size/bike-size.component';
import { RiderSizeFormComponent } from './components/rider-size-form/rider-size-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalLayoutComponent,
    BikeSizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RiderSizeFormComponent,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
