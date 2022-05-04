import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IGetArticleResponse} from "../types/get-article-response.interface";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {IArticle} from "../types/article.interface";

@Injectable()
export class ArticlesServise{
  constructor(private http: HttpClient) {
  }
  public getArticle(slug: string): Observable<IArticle>{
    const fullUrl = `${environment.authApiURL}/articles/${slug}`;
    return this.http.get<IGetArticleResponse>(fullUrl).pipe(map(response => response.article));
  }
}
