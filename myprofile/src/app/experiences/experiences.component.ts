import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

    experiencedatas: any;

    constructor(appService: AppService) {
        appService.getExperienceData().subscribe(data => {
            this.experiencedatas = data;
        });
    }

    ngOnInit() {
    }

}
