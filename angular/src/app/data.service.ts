import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  returnStocks(symbol) {
    const params = { params: new HttpParams().set('symbol', symbol) };
    return this.http.get('http://localhost:7000/api/stockData', params);
  };

  getAccountData(accountId) {
    const params = { params: new HttpParams().set('accountId', accountId)} ;
    return this.http.get('http://localhost:7000/api/portfolioData', params);
  }

  // chartData(symbol) {
  //   const params = { params: new HttpParams().set('symbol', symbol) };
  //   return this.http.get('http://localhost:7000/api/historicalData', params);
  // }

  checkBalance(symbol, accountId, shares) {
    const params = new HttpParams().set('symbol', symbol).set('accountId', accountId).set('shares', shares);
    return this.http.get('http://localhost:7000/api/checkBalance', {observe: 'response', params});
  }

  checkStock(symbol, accountId, shares) {
   const params = new HttpParams().set('symbol', symbol).set('accountId', accountId).set('shares', shares);
   return this.http.get('http://localhost:7000/api/checkStock', {observe: 'response', params});
  }

  login(email, password) {
    const content = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'x-email': email,
      'x-password': password
    }
    const options = {headers: new HttpHeaders(content)}

    return this.http.get('http://localhost:7000/api/login', options)
  }


}
