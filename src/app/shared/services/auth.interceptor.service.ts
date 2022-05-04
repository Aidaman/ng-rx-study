import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {PersistanceService} from "./persistance.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  constructor(private pService: PersistanceService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.pService.get('accessToken');
    request = request.clone({
      setHeaders: {
        Authorisation: token? `Token ${token}` : ''
      }
    })
    return next.handle(request);
  }

}
