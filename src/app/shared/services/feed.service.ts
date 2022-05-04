import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IGetFeedResponse} from "../general-feed/types/get-feed-response.interface";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FeedService{
  constructor(private http: HttpClient) {}
  getFeed(url: string): Observable<IGetFeedResponse>{
    const fullUrl = environment.authApiURL + url;

    return this.http.get<IGetFeedResponse>(fullUrl);
  }
}
