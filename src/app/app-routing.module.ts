import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CorrelationComponent} from './correlation/correlation.component';
import {CoinsComponent} from './coins/coins.component';
import {CoinComponent} from './coin/coin.component';
import {ExchangesComponent} from './exchanges/exchanges.component';
import {ExchangeComponent} from './exchange/exchange.component';
import {ChartComponent} from './chart/chart.component';
import {DevelopmentsComponent} from './developments/developments.component';
import {DevelopmentComponent} from './development/development.component';
import {RepoComponent} from './repo/repo.component';
import {PeopleComponent} from './people/people.component';

const routes: Routes = [
  { path: 'developments', component: DevelopmentsComponent },
  { path: 'development/:id', component: DevelopmentComponent },
  { path: 'repo/:owner/:id', component: RepoComponent },
  { path: 'people/:id', component: PeopleComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'coin/:currency', component: CoinComponent },
  { path: 'exchanges', component: ExchangesComponent },
  { path: 'exchange/:exchange', component: ExchangeComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'chart/:currency', component: ChartComponent },
  { path: 'chart/:exchange/:base/:quote', component: ChartComponent },
  { path: 'correlation', component: CorrelationComponent },
  { path: '', redirectTo: '/developments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
