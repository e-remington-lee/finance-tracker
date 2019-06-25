import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  returnStocks(symbol) {
    const params = { params: new HttpParams().set('symbol', symbol) };
    return this.http.get('http://localhost:7000/api/stockData', params);
  };

  chartData(symbol) {
    const params = { params: new HttpParams().set('symbol', symbol) };
    return this.http.get('http://localhost:7000/api/historicalData', params);
  }

}