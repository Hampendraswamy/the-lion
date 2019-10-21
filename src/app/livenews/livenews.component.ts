import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-livenews',
  templateUrl: './livenews.component.html',
  styleUrls: ['./livenews.component.css']
})
export class LivenewsComponent implements OnInit {
newsdata:any=[]
  constructor(private news:NewsService) { }

  ngOnInit() {
    this.news.fun().subscribe(swamy=>(this.newsdata=swamy));
  }

  funn(){
    this.newsdata.articles.author;
    console.log(this.newsdata.articles.author)
  }

}
