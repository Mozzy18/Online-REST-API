import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntersceptorService implements HttpInterceptor{

  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      url: environment.api + req.url,
      setHeaders: {
        'Authorization': `Bearer ${environment.token}`,
      },
    })

    return next.handle(authReq)
  }
}
