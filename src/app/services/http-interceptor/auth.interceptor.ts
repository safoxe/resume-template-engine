import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getAccessToken()}`,
        Accept: '*/*',
      }),
    });
    return next.handle(authReq);
  }
}
