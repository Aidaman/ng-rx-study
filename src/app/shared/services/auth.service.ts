import {Injectable} from "@angular/core";
import {IRegisterRequest} from "../../auth/types/registerRequest.interface";
import {Observable} from "rxjs";
import {ICurrentUser} from "../types/currentUser.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IAuthResponse} from "../types/auth-response.interface";
import {map} from "rxjs/operators";
import {ILoginRequest} from "../../auth/types/login-request.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  private getUser(res: IAuthResponse): ICurrentUser{
    return res.user;
  }

  public register(data: IRegisterRequest): Observable<ICurrentUser>{
    const url = environment.authApiURL + 'users';
    console.log(url);
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map(this.getUser));
  }

  public login(data: ILoginRequest): Observable<ICurrentUser>{
    const url = environment.authApiURL + 'users/login';
    console.log(url);
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map(this.getUser));
  }

  public getCurrentUser(): Observable<ICurrentUser>{
    const url = environment.authApiURL + 'user';
    // @ts-ignore
    return this.http.get(url).pipe(map(this.getUser));
  }
}
