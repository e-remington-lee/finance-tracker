import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  returnStocks(symbol) {
    const params = { params: new HttpParams().set('symbol', symbol) };
    return this.http.get('http://localhost:7000/api/stockData', params);
  };

  buyStock2(symbol, username, shares) {
    const params = { params: new HttpParams().set('symbol', symbol).set( 'username', username).set('shares', shares) };
    return this.http.get('http://localhost:7000/api/latestPrice', params);
  }

  updateBalance(symbol, username, shares) {
    const params = { params: new HttpParams().set('symbol', symbol).set( 'username', username).set('shares', shares) };
    return this.http.get('http://localhost:7000/api/balance', params);
  }
}

