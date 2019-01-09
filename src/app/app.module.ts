// import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule, MatTableModule, MatCheckboxModule, MatGridListModule,
  MatMenuModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatListModule,
  MatIconModule, MatCardModule, MatTabsModule, MatChipsModule, MatInputModule} from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoinEffects } from './effects/coin.effect';

import { Angulartics2Module } from 'angulartics2';

import { CoinService } from './service/coin.service';
import { CoinsComponent } from './coins/coins.component';
import { CoinComponent } from './coin/coin.component';
import { CoinTableComponent } from './coin-table/coin-table.component';
import { ReposTableComponent } from './repos-table/repos-table.component';
import { RepoComponent } from './repo/repo.component';
import { PeopleComponent } from './people/people.component';
import { CoinSummaryComponent } from './coin-summary/coin-summary.component';
import { CoinsSummaryComponent } from './coins-summary/coins-summary.component';

export function get_settings(coinService: CoinService) {
  return () => coinService.initSettings().toPromise();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoinsComponent,
    CoinComponent,
    CoinTableComponent,
    ReposTableComponent,
    RepoComponent,
    PeopleComponent,
    CoinSummaryComponent,
    CoinsSummaryComponent
  ],
  imports: [
    BrowserAnimationsModule, AppRoutingModule, NgxChartsModule, MatInputModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatFormFieldModule,
    MatGridListModule, MatTableModule, NgxDatatableModule, MatSelectModule, MatListModule,
    MatIconModule, MatCardModule, MatTabsModule, MatChipsModule, HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CoinEffects]),
    Angulartics2Module.forRoot()],
  providers: [
    CoinService,
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [CoinService], multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
