import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) {

    }

    getProjectData() {
        return this.http.get("/assets/projectsdata.json");
    }

    getExperienceData() {
        return this.http.get("/assets/experiencedata.json");
    }

    getAboutData() {
        return this.http.get("/assets/aboutdata.json");
    }
}
