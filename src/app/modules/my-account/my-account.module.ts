import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResizableModule } from 'angular-resizable-element';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyAccountPanelInfoComponent } from './my-account-panel-info/my-account-panel-info.component';
import { MyAccountPanelControlsComponent } from './my-account-panel-controls/my-account-panel-controls.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProjectsListComponent } from './my-projects/projects-list/projects-list.component';
import { AccountControlsComponent } from './my-projects/account-controls/account-controls.component';
import { EqualWidthDirective } from './shared/directives/equal-width.directive';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateProjectFormComponent } from './create-project/create-project-form/create-project-form.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDescriptionComponent } from './project/project-description/project-description.component';
import { ProjectControlsComponent } from './project/project-controls/project-controls.component';
import { ControlsPanelComponent } from './project/project-controls/controls-panel/controls-panel.component';
import { ProfessionSectionComponent } from './project/project-description/profession-section/profession-section.component';

@NgModule({
  declarations: [
    MyAccountComponent,
    MyAccountPanelInfoComponent,
    MyAccountPanelControlsComponent,
    MyProjectsComponent,
    ProjectsListComponent,
    AccountControlsComponent,
    EqualWidthDirective,
    CreateProjectComponent,
    CreateProjectFormComponent,
    ProjectComponent,
    ProjectDescriptionComponent,
    ProjectControlsComponent,
    ControlsPanelComponent,
    ProfessionSectionComponent,
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    ResizableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MyAccountModule {}
