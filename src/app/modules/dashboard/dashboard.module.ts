import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectSelectionComponent } from './components/project-selection/project-selection.component';
import { ProjectManagementComponent } from './components/project-management/project-management.component';

@NgModule({
  declarations: [DashboardComponent, ProjectSelectionComponent, ProjectManagementComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
