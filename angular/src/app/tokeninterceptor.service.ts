import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(public auth: AuthService) { }

  intercept(req, next){
    let authorizedToken = req.clone({
      setHeaders: {
        Authorization: `${this.auth.getToken()}`
      }
    });

    return next.handle(authorizedToken)
  }
}
