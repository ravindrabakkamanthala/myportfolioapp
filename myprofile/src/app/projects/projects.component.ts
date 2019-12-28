import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    colstotal: number = 0;
    projectsdata: any;

    constructor(appService : AppService) {
        appService.getProjectData().subscribe(data => {
            this.projectsdata = data;
        });
    }

    ngOnInit() {
        this.colstotal = (window.innerWidth <= 400) ? 1 : 3;
    }

    onResize(event) {
        this.colstotal = (event.target.innerWidth <= 400) ? 1 : 3;
    }


}
