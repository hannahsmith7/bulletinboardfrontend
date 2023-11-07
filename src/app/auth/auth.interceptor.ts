import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler){
    const authToken = localStorage.getItem('token');

    request = request.clone({
      setHeaders: { Authorization: "Bearer " + authToken}
    })
    
    return next.handle(request);
  }



}