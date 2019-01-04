import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CorrelationComponent} from './correlation/correlation.component';
import {CoinsComponent} from './coins/coins.component';
import {CoinComponent} from './coin/coin.component';
import {ExchangesComponent} from './exchanges/exchanges.component';
import {ExchangeComponent} from './exchange/exchange.component';
import {ChartComponent} from './chart/chart.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'coin/:currency', component: CoinComponent },
  { path: 'exchanges', component: ExchangesComponent },
  { path: 'exchange/:exchange', component: ExchangeComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'chart/:currency', component: ChartComponent },
  { path: 'chart/:exchange/:base/:quote', component: ChartComponent },
  { path: 'correlation', component: CorrelationComponent },
  { path: '', redirectTo: '/coins', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
