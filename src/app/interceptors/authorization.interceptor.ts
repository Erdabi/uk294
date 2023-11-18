// @ts-ignore

// Import necessary Angular modules and dependencies
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

// Injectable decorator to mark the class as injectable
@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  // Constructor
  constructor() {}

  // Intercept method to handle outgoing HTTP requests
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Check if there is an access token in local storage
    if (localStorage.getItem("ACCESS_TOKEN")) {
      // Clone the request and set the Authorization header with the access token
      return next.handle(request.clone({
        setHeaders: {
          'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
        }
      }));
    }
    // If there is no access token, proceed with the original request
    return next.handle(request);
  }
}
