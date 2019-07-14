import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { BuyModalComponent } from './buy-modal/buy-modal.component';
import { SellModalComponent } from './sell-modal/sell-modal.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BuySellComponent,
    PortfolioComponent,
    AccountComponent,
    LoginComponent,
    StockCardComponent,
    BuyModalComponent,
    SellModalComponent,
    PortfolioCardComponent,
  ],
  entryComponents: [
    BuyModalComponent,
    SellModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [AuthService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokeninterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
