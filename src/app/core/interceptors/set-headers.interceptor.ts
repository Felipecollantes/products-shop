import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, catchError, throwError } from 'rxjs';
import { RootState } from 'src/app/data/store';
import * as FromUser from '../../data/store/user/selectors';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SetHeaderInterceptor implements HttpInterceptor {
  private accessToken: string | undefined = '';
  constructor(private store: Store<RootState>) {
    this.store.select(FromUser.selectToken).subscribe((accessToken) => (this.accessToken = accessToken?.access_token));
  }

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.accessToken) req = req.clone({ setHeaders: { authorization: `Bearer ${this.accessToken}` } });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status >= 500) console.error(error);
        if (error.status === 401) console.error('Unauthorized ', error);
        return throwError(() => error);
      })
    );
  }
}
