import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScaffoldMenuComponent } from './components/scaffold-menu/scaffold-menu.component';
import { TemplateEngineComponent } from './components/template-engine/template-engine.component';
import { ManagementToolsComponent } from './management-tools/management-tools.component';
import { ResourceToolsComponent } from './resource-tools/resource-tools.component';
import { ResumeTemplateComponent } from './resume-template/resume-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaffoldMenuComponent,
    TemplateEngineComponent,
    ManagementToolsComponent,
    ResourceToolsComponent,
    ResumeTemplateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
