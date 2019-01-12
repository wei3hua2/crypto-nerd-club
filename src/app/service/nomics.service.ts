import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class NomicsService {
  private apiKey = '';
  private NOMIC_URL = 'https://api.nomics.com/v1';

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiKey = config.getNomicAPIKey();
  }

  dashboard(symbols: string[]): Observable<any[]> {
    return this.http
      .get<any[]>( this.NOMIC_URL + '/dashboard?key=' + this.apiKey );
  }

  castNomicDate(dt: Date | string): string {
    if (typeof dt === 'string') return dt;
    else return encodeURIComponent(moment(dt).format());
  }
}
