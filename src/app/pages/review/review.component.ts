import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title } from '@angular/platform-browser';
import * as dataJSON from './data.json';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  providers: [NgbCarouselConfig]
})

export class ReviewComponent {

  reviews:any[] = []
  readJSON = dataJSON;

  constructor(private titleService: Title, config: NgbCarouselConfig) {    
    this.titleService.setTitle('SampleApp - Review');
    config.showNavigationArrows = true;
    config.interval = 3000;    
    
    this.reviews = this.readJSON.itemArray;
  }  
}
