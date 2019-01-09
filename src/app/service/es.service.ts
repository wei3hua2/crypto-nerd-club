import { Injectable } from '@angular/core';
import * as es from 'elasticsearch-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EsService {

  private ES_URL = 'https://search-es-cryptonerdclub-com-wwmnrjbx3bsxf3ogyltizhqone.us-east-1.es.amazonaws.com/';
  elasticSearch;

  constructor(private http: HttpClient) {
    this.elasticSearch = new es.Client({host: this.ES_URL, log: 'error'});
  }

  getES(): any {
    return this.elasticSearch;
  }
  ping(): Observable<any> {
    return Observable.create((observer) => {
      this.elasticSearch.ping({}, (err) => {
        observer.next(err);
      });
    });
  }
  search(params): Observable<any> {
    return Observable.create((observer) => {
      this.elasticSearch.search(params)
        .then((result) => {
          observer.next(result.hits);
        }).catch(observer.error);
    });
  }
  get(params): Observable<any> {
    return Observable.create((observer) => {
      this.elasticSearch.get(params)
        .then((result) => {
          observer.next(result['_source']);
        }).catch(observer.error);
    });
  }
}
