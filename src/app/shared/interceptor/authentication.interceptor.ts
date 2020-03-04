import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Storages } from '../storages.helper';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _authService: AuthService, private _router : Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // checking Request header with Authorization, if blank then create clone and process request
    if (request.headers.get("Authorization") == "") {
      return next.handle(request.clone());
    }

    let token = "";
    if (isPlatformBrowser(this.platformId)) {
      token = Storages.getToken();
    }

    const clonedreq = request.clone({
      headers: request.headers.set("Authorization", token)
    });

    // console.log("api call : ", clonedreq);
    return next.handle(clonedreq).pipe(tap(
      succ => {
        // console.log("Success")
      },
      err => {
        // console.log(err)
        if (err.status === 401) {
          this._authService.logoutByTokenExpire();
        }
        if (err.status === 500) {
          this._router.navigate(["/internal-server-error"])
        }

      }
    ));

  }
}
