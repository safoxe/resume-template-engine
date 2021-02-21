import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScaffoldMenuComponent } from './components/scaffold-menu/scaffold-menu.component';
import { TemplateEngineComponent } from './components/template-engine/template-engine.component';
import { ManagementToolsComponent } from './components/management-tools/management-tools.component';
import { ResourceToolsComponent } from './components/resource-tools/resource-tools.component';
import { ResumeTemplateComponent } from './components/resume-template/resume-template.component';
import { EditableFieldComponent } from './components/editable-field/editable-field.component';
import { FocusDirective } from './components/editable-field/directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScaffoldMenuComponent,
    TemplateEngineComponent,
    ManagementToolsComponent,
    ResourceToolsComponent,
    ResumeTemplateComponent,
    EditableFieldComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent],
})
export class AppModule {}
