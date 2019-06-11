import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'buySell', component: BuySellComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'account', component: AccountComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
