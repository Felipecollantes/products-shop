import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './data/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SetHeaderInterceptor } from './core/interceptors/set-headers.interceptor';
import { HeaderComponent } from './layout/header/header.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot(effects),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SetHeaderInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
