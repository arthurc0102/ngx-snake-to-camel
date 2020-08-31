import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { camelize, decamelize } from '@ridi/object-case-converter';

@Injectable()
export class NgxSnakeToCamelInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(
        request.clone({ body: decamelize(request.body, { recursive: true }) }),
      )
      .pipe(
        map((event) => {
          if (event instanceof HttpResponse) {
            return event.clone({
              body: camelize(event.body, { recursive: true }),
            });
          }

          return event;
        }),
      );
  }
}
