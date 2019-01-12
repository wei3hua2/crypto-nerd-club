// import { Injectable } from '@angular/core';
// import {CoinDashboard} from '../models';
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

//   // UTILITY
//   castNomicDate(dt: Date | string): string {
//     if (typeof dt === 'string') return dt;
//     else return encodeURIComponent(moment(dt).format());
//   }
// }
