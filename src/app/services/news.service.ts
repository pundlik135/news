import { Injectable } from '@angular/core';
import { News, NewsResponse } from '../model/news';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor( private http: HttpClient) { }
    newsUrl:String='https://api.nytimes.com/svc/topstories/v2/home.json?api-key=315a5a51483b469a918246dc2753b339';
  private data: Observable<NewsResponse>;
  getSectionNews(section: string):Observable<NewsResponse> {
    // fetch news of that sectionName
   // return this.http.get(this.newsUrl)
    //    .map(data => {
    //      data.json();       
     //     console.log("I CAN SEE DATA HERE: ", data.json());
     //     return data.json();
      //    //return this.transformRawData(data);
    //});
    this.newsUrl = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=315a5a51483b469a918246dc2753b339`;

    return this.http.get<NewsResponse>(this.newsUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError) 
      )

    }
    handleError(err) {
      let errorMessage: string;
      if (err.error instanceof ErrorEvent) {
        // client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // back-end returned an unsuccessful response code & response body may contain what went wrong.
        errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
      }
      console.error(err);
      return throwError(errorMessage);
    }
    
  }

