import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IGetPopularTagsResponse} from "../general-feed/popular-tags/types/get-popular-tags-response.interface";
import {PopularTagType} from "../types/popular-tag.type";
import {map} from "rxjs/operators";

@Injectable()
export class GetPopularTagsService {
  constructor(private http: HttpClient) {
  }
  public getPopularTags(): Observable<PopularTagType[]>{
    const url = environment.authApiURL + 'tags';
    return  this.http.get(url).pipe(
      map( (response: any)=> {
        return response.tags;
      }),
    );
  }
}
