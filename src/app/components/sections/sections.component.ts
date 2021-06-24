import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sections } from '../../store/reducers/sections.reducer';
// import { Observable } from 'rxjs/Observable';
import {NewsService} from '../../services/news.service';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sectionList: any;
  private sections = [
    'home', 'opinion', 'world', 'national', 'politics', 'business', 'technology',
    'science', 'health', 'sports', 'arts', 'books', 'movies', 'theater', 'fashion',
    'food', 'travel', 'magazine', 'realestate', 'automobiles'
  ];
 private service;
  constructor(service:NewsService) {
    this.service=service;
  }

  ngOnInit() {
    this.service.getSectionNews('Home').subscribe((data) => {
        console.log(data); // should be 'data to send can be object or anything'
        //this.sectionList = data
        var dict = []; // create an empty dictionary
        data.results.forEach((item, index) => {         
          console.log(' item.section               >>>'+ item.section)
           dict.push(item.section );
        });
        this.sectionList=dict;
      });
  
  
    
  }

}
