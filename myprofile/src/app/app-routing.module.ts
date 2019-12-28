import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
    { path: "about", component: AboutComponent },
    { path: "skills", component: SkillsComponent },
    { path: "experience", component: ExperiencesComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
