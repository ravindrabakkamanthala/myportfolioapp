import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    breakpoint: number;
    aboutdata: any;

    constructor(appService: AppService) {
        appService.getAboutData().subscribe(data => {
            this.aboutdata = data;
        })
    }

    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    }

    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    }
}
