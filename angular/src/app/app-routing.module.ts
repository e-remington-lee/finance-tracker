import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { RulesRankingComponent } from './rules-ranking/rules-ranking.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'buySell', component: BuySellComponent, canActivate: [AuthGuard]},
  {path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'rulesRanking', component: RulesRankingComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
 
