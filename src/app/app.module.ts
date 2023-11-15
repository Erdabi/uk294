import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from "./elements/header/header.component";
import {FooterComponent} from "./elements/footer/footer.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiModule, Configuration} from "./openapi-client";
import {AuthorizationInterceptor} from "./interceptors/authorization.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule.forRoot(() => {
      return new Configuration({
        basePath: 'https://product-manager.cyrotech.ch'
      })
    }),
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthorizationInterceptor
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
