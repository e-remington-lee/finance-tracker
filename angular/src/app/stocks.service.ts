import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  buyStock2(stockData) {
    return this.http.post('/api/buyStock', stockData);
  }

  sellStock(stockData) {
    return this.http.post('/api/sellStock', stockData);
  }

  updateBalanceBuy(stockData) {
    return this.http.post('/api/updateBalanceBuy', stockData);
  }

  updateBalanceSell(stockData) {
    return this.http.post('/api/updateBalanceSell', stockData);
  }

  transactions(stockData) {
    return this.http.post('/api/transactions', stockData);
  }
  
}

