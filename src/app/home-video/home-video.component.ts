import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.scss'],
  providers: [NgbRatingConfig]
})
export class HomeVideoComponent implements OnInit {
  constructor(config: NgbRatingConfig) {
     config.max = 5;
     config.readonly = true;
   }

  ngOnInit() {
   
  }

}
