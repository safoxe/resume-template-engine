import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectCreationRoutingModule } from './project-creation-routing.module';
import { ProjectCreationComponent } from './components/project-creation/project-creation.component';
import { ProjectBodyComponent } from './components/project-body/project-body.component';

@NgModule({
  declarations: [ProjectCreationComponent, ProjectBodyComponent],
  imports: [CommonModule, ProjectCreationRoutingModule],
})
export class ProjectCreationModule {}
