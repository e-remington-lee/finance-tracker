import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getToken(): string {
    return sessionStorage.getItem('Authorization')
  }

  get accessRoute(): boolean {
    //on loop check if it's expired, not just if it is present
    if (sessionStorage.getItem('Authorization')) {
      return true
    } else {
      return false
    }
  }

  constructor() { }
}
