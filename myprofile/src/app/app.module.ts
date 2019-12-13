import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatToolbarModule, MatTabsModule, MatIconModule, MatSidenavModule,
    MatListModule, MatButtonModule, MatMenuModule, MatCardModule, MatGridListModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatExpansionModule
} from '@angular/material';
import { FormGroup, FormBuilder } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SkillsComponent,
        AboutComponent,
        ExperiencesComponent,
        ProjectsComponent,
        ContactComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MatToolbarModule,
      MatTabsModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      MatMenuModule,
      MatCardModule,
      MatGridListModule,
      MatFormFieldModule,
      MatExpansionModule,
      NgbModule
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
