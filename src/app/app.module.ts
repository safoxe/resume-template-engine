import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScaffoldMenuComponent } from './components/scaffold-menu/scaffold-menu.component';
import { TemplateEngineComponent } from './components/template-engine/template-engine.component';

@NgModule({
  declarations: [AppComponent, ScaffoldMenuComponent, TemplateEngineComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
