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

  buyStock2(symbol, accountId, shares) {
    const params = { params: new HttpParams().set('symbol', symbol).set( 'accountId', accountId).set('shares', shares) };
    return this.http.get('http://localhost:7000/api/buyStock', params);
  }

  updateBalance(symbol, accountId, shares) {
    const params = { params: new HttpParams().set('symbol', symbol).set( 'accountId', accountId).set('shares', shares) };
    return this.http.get('http://localhost:7000/api/balance', params);
  }

  transactions(accountId, symbol, type, shares) {
    const params = { params: new HttpParams().set('accountId', accountId).set('symbol', symbol).set('type', type).set('shares', shares) }  
    return this.http.get('http://localhost:7000/api/transactions', params);
  }
}

