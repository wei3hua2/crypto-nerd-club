// import { Injectable } from '@angular/core';
// import {CoinDashboard, Currency, OHLCV, Settings} from '../models';
// import { Observable, of } from 'rxjs';
// import { switchMap } from 'rxjs/operators';

// import { HttpClient } from '@angular/common/http';
// import * as  _ from 'lodash';
// import * as moment from 'moment';

// import { environment } from '../../environments/environment';

// @Injectable()
// export class CoinService {

//   private NOMIC_URL = 'https://api.nomics.com/v1';
//   private CONFIG_URL = 'http://config.cryptonerdclub.com/';

//   settings: Settings;

//   constructor(private http: HttpClient) {
//   }

//   initSettings(): Observable<Settings> {

//     if (this.settings) return of(this.settings);

//     else if (environment.nomics_api_key) {
//       this.settings = {nomics_api_key: environment.nomics_api_key};
//       return of(this.settings);
//     }
//     else {
//       return this.getRemoteSettings().pipe(
//         switchMap( (settings) => {
//           this.settings = settings;
//           return of(settings);
//         })
//       );
//     }
//   }

//   getSettings(): Settings {
//     return this.settings;
//   }
//   setSettings(settings: Settings): void {
//     this.settings = settings;
//   }

//   getRemoteSettings(): Observable<Settings> {
//     if (environment.production)
//       return this.http.get<Settings>(this.CONFIG_URL + 'settings.json');
//     else
//       return this.http.get<Settings>(this.CONFIG_URL + 'settings-dev.json');
//   }

//   getCurenciesList(): Observable<Currency[]> {
//     const nomic_api = this.getSettings().nomics_api_key;

//     return this.http
//       .get<any[]>( this.NOMIC_URL + '/currencies?key=' + nomic_api )
//       .pipe(
//         switchMap(data => of(_.map(_.values(data), d => ({'currency': d.id}) )) )
//       );
//   }

//   nomicMarkets(): Observable<any[]> {
//     const nomic_api = this.getSettings().nomics_api_key;

//     return this.http
//       .get<any[]>( this.NOMIC_URL + '/markets?key=' + nomic_api );
//   }
//   nomicMarketsPrice(params: any): Observable<any> {
//     const nomic_api = this.getSettings().nomics_api_key;
//     const exchange = params['exchange'] || '';
//     const currency = params['currency'] || '';


//     return this.http
//       .get<any[]>( this.NOMIC_URL + '/exchange-markets/prices?'
//       + 'exchange=' + exchange
//       + '&currency=' + currency
//       + '&key=' + nomic_api )
//       .pipe(
//         switchMap(data => {
//           return of(_.map(data, d => {
//             d.price_quote = +d.price_quote;
//             return d;
//           }));
//         })
//       );
//   }
//   nomicDashboard(): Observable<CoinDashboard[]> {
//     const nomic_api = this.getSettings().nomics_api_key;
//     return this.http
//       .get<CoinDashboard[]>( this.NOMIC_URL + '/dashboard?key=' + nomic_api )
//       .pipe(
//         switchMap(data => {
//         return of( _.map(data, d => {
//           d.close = +d.close;
//           d.dayOpen = +d.dayOpen;
//           d.dayVolume = +d.dayVolume;
//           d.dayOpenVolume = +d.dayOpenVolume;
//           d.weekOpen = +d.weekOpen;
//           d.weekVolume = +d.weekVolume;
//           d.weekOpenVolume = +d.weekOpenVolume;
//           d.monthOpen = +d.monthOpen;
//           d.monthVolume = +d.monthVolume;
//           d.monthOpenVolume = +d.monthOpenVolume;
//           d.yearOpen = +d.yearOpen;
//           d.yearVolume = +d.yearOpen;
//           d.yearOpenVolume = +d.yearOpenVolume;
//           d.high = +d.high;
//           d.availableSupply = +d.availableSupply;
//           d.maxSupply = +d.maxSupply;

//           return d;
//         }) );
//       }));
//   }
//   nomicCurrenciesSparkline(start: Date, end: Date | string = ''): Observable<any> {
//     const nomic_api = this.getSettings().nomics_api_key;
//     const url = this.NOMIC_URL + '/currencies/sparkline' +
//        '?start=' + this.castNomicDate(start) +
//        '&end=' + this.castNomicDate(end) +
//        '&key=' + nomic_api;

//     return this.http.get<any>(url);
//   }
//   nomicOHCL(params?: any): Observable<OHLCV[]> {
//     const nomic_api = this.getSettings().nomics_api_key;
//     const param = params || {};

//     const currency = params['currency'] || '';
//     const interval = params['interval'] || '1d';
//     const exchange = params['exchange'] || '';
//     const market = params['market'] || '';
//     const start = params['start'] || '';
//     const end = params['end'] || '';

//     const base_url = (!!market) ? '/exchange_candles' : '/candles';

//     let url = '';

//     if (!!currency) {
//       url = this.NOMIC_URL + base_url
//         + '?currency=' + currency
//         + '&interval=' + interval
//         + '&start=' + start
//         + '&end=' + end
//         + '&key=' + nomic_api;
//     } else if (!!market) {
//       url = this.NOMIC_URL + base_url
//         + '?exchange=' + exchange
//         + '&market=' + market
//         + '&interval=' + interval
//         + '&start=' + start
//         + '&end=' + end
//         + '&key=' + nomic_api;
//     }

//     return this.http
//       .get<OHLCV[]>( url )
//       .pipe(
//         switchMap(data => {
//           return of(_.map(data, d => {
//             d.close = +d.close;
//             d.high = +d.high;
//             d.low = +d.low;
//             d.open = +d.open;
//             d.volume = +d.volume;
//             // d.timestamp = Date.parse(d.timestamp);

//             return d;
//           }));
//         })
//       );
//   }
//   nomicGlobalVolumeHistory(start: Date, end: Date | string = ''): Observable<any> {
//     const nomic_api = this.getSettings().nomics_api_key;
//     const url = this.NOMIC_URL + '/volume/history' +
//        '?start=' + this.castNomicDate(start) +
//        '&end=' + this.castNomicDate(end) +
//        '&key=' + nomic_api;

//     return this.http.get<any>(url)
//       .pipe(
//         switchMap(data => {
//           return of(_.map(data, d => {
//             d.volume = +d.volume;
//             return d;
//           }));
//         })
//       );
//   }
//   nomicMarketCapHistory(start: Date, end: Date | string = ''): Observable<any> {
//     const nomic_api = this.getSettings().nomics_api_key;
//     const url = this.NOMIC_URL + '/market-cap/history' +
//        '?start=' + this.castNomicDate(start) +
//        '&end=' + this.castNomicDate(end) +
//        '&key=' + nomic_api;

//     return this.http.get<any>(url)
//       .pipe(
//         switchMap(data => {
//           return of(_.map(data, d => {
//             d.market_cap = +d.market_cap;
//             return d;
//           }));
//         })
//       );
//   }
//   nomicAllTimeHighs(): Observable<any> {
//     const nomic_api = this.getSettings().nomics_api_key;
//     const url = this.NOMIC_URL + '/currencies/highs' + '&key=' + nomic_api;

//     return this.http.get<any>(url);
//   }
//   nomicCurrenciesInterval(start: Date, end: Date | string = ''): Observable<any> {
//     const nomic_api = this.getSettings().nomics_api_key;
//     const url = this.NOMIC_URL + '/currencies/interval' +
//        '?start=' + this.castNomicDate(start) +
//        '&end=' + this.castNomicDate(end) +
//        '&key=' + nomic_api;

//     return this.http.get<any>(url);
//   }
//   nomicSuppliesInterval(start: Date, end: Date | string = ''): Observable<any> {
//     const nomic_api = this.getSettings().nomics_api_key;
//     const url = this.NOMIC_URL + '/supplies/interval' +
//        '?start=' + this.castNomicDate(start) +
//        '&end=' + this.castNomicDate(end) +
//        '&key=' + nomic_api;

//     return this.http.get<any>(url);
//   }

//   // UTILITY
//   castNomicDate(dt: Date | string): string {
//     if (typeof dt === 'string') return dt;
//     else return encodeURIComponent(moment(dt).format());
//   }
// }
