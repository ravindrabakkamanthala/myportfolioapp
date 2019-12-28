import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatToolbarModule, MatTabsModule, MatIconModule, MatSidenavModule,
    MatListModule, MatButtonModule, MatMenuModule, MatCardModule, MatGridListModule, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatExpansionModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SkillsComponent,
        AboutComponent,
        ExperiencesComponent,
        ProjectsComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
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
  providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }
