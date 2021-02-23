import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScaffoldMenuComponent } from './components/scaffold-menu/scaffold-menu.component';
import { TemplateEngineComponent } from './components/template-engine/template-engine.component';
import { ManagementToolsComponent } from './components/management-tools/management-tools.component';
import { ResourceToolsComponent } from './components/resource-tools/resource-tools.component';
import { ResumeTemplateComponent } from './components/resume-template/resume-template.component';
import { EditableFieldComponent } from './components/editable-field/editable-field.component';
import { FocusDirective } from './components/editable-field/directives/focus.directive';
import { CoverImageDialogComponent } from './components/cover-image-dialog/cover-image-dialog.component';
import { TechnologiesDialogComponent } from './components/technologies-dialog/technologies-dialog.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

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
    CoverImageDialogComponent,
    TechnologiesDialogComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }],
  bootstrap: [AppComponent],
})
export class AppModule {}
