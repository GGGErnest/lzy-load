import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { QpDefaultRouterService } from './modules/form-qp/services/qp-default-router.service';
import { QP_ROUTER_ADAPTER } from './modules/form-qp/interfaces/qp-router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [{ provide: QP_ROUTER_ADAPTER, useClass: QpDefaultRouterService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
