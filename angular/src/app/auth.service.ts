import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getToken(): string {
    return sessionStorage.getItem('Authorization')
  }

  constructor() { }
}
