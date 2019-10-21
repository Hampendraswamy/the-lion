import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  fun(){
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=aa02edf1cc3742d28613a6c54b1468cd")
  }
}
