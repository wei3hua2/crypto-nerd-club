// import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule, MatTableModule, MatCheckboxModule, MatGridListModule,
  MatMenuModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatListModule,
  MatIconModule, MatCardModule, MatTabsModule, MatChipsModule, MatInputModule} from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highstock from 'highcharts/modules/stock.src';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { CoinsComponent } from './coins/coins.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { ChartComponent } from './chart/chart.component';
import { CoinComponent } from './coin/coin.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoinEffects } from './effects/coin.effect';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeSummaryComponent } from './exchange-summary/exchange-summary.component';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';
import { CoinsTableComponent } from './coins-table/coins-table.component';
import { ExchangesTableComponent } from './exchanges-table/exchanges-table.component';
import { ExchangePairsComponent } from './exchange-pairs/exchange-pairs.component';
import { CoinChartComponent } from './coin-chart/coin-chart.component';

import { Angulartics2Module } from 'angulartics2';

import { CoinService } from './coin.service';
import { DevelopmentsComponent } from './developments/developments.component';
import { DevelopmentComponent } from './development/development.component';
import { DevelopmentTableComponent } from './development-table/development-table.component';
import { ReposTableComponent } from './repos-table/repos-table.component';
import { RepoComponent } from './repo/repo.component';
import { PeopleComponent } from './people/people.component';
import { DevelopmentSummaryComponent } from './development-summary/development-summary.component';
import { DevelopmentsSummaryComponent } from './developments-summary/developments-summary.component';

export function get_settings(coinService: CoinService) {
  return () => coinService.initSettings().toPromise();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CorrelationComponent,
    CoinsComponent,
    ExchangesComponent,
    ChartComponent,
    CoinComponent,
    ExchangeComponent,
    ExchangeSummaryComponent,
    DashboardChartComponent,
    CoinsTableComponent,
    ExchangesTableComponent,
    ExchangePairsComponent,
    CoinChartComponent,
    DevelopmentsComponent,
    DevelopmentComponent,
    DevelopmentTableComponent,
    ReposTableComponent,
    RepoComponent,
    PeopleComponent,
    DevelopmentSummaryComponent,
    DevelopmentsSummaryComponent
  ],
  imports: [
    BrowserAnimationsModule, AppRoutingModule, NgxChartsModule, MatInputModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatFormFieldModule,
    MatGridListModule, MatTableModule, NgxDatatableModule, MatSelectModule, MatListModule,
    MatIconModule, MatCardModule, MatTabsModule, MatChipsModule, ChartModule, HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CoinEffects]),
    Angulartics2Module.forRoot()],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock ]},
    CoinService,
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [CoinService], multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
