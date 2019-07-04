import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  buyStock2(stockData) {
    return this.http.post('http://localhost:7000/api/buyStock', stockData);
  }

  sellStock(stockData) {
    return this.http.post('http://localhost:7000/api/sellStock', stockData);
  }

  updateBalanceBuy(stockData) {
    return this.http.post('http://localhost:7000/api/updateBalanceBuy', stockData);
  }

  updateBalanceSell(stockData) {
    return this.http.post('http://localhost:7000/api/updateBalanceSell', stockData);
  }

  transactions(stockData) {
    return this.http.post('http://localhost:7000/api/transactions', stockData);
  }
}

