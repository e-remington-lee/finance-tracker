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

  buyStock(symbol, username) {
    const params = { params: new HttpParams().set('symbol', symbol).set( 'username', username) };
    return this.http.get('http://localhost:7000/api/latestPrice', params);
  }

  // retrieveStockList(symbol) {
  //   const params = { params: new HttpParams().set('symbol', symbol) };
  //   return this.http.get('http://localhost:7000/api/stockList', params);
  // }

}
