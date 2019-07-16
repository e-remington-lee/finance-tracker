import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getToken(): string {
    return sessionStorage.getItem('Authorization')
  }


  get accessRoute(): boolean  {
    const x = sessionStorage.getItem('Authorization')
    if (x == null || x == undefined || x == '') {
      return false
    } 
    const y = jwtDecode(x)
    const date = new Date(0)
    const tokenDate = date.setUTCSeconds(y.exp);
    if (new Date().valueOf() > tokenDate.valueOf()) {
      return false
    }
    return true
  }

  decodeUser() {
    const x = sessionStorage.getItem('Authorization')
    const y = jwtDecode(x)
    return y
      }

  constructor() { }
}
