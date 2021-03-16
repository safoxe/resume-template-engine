import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResizableModule } from 'angular-resizable-element';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyAccountPanelInfoComponent } from './my-account-panel-info/my-account-panel-info.component';
import { MyAccountPanelControlsComponent } from './my-account-panel-controls/my-account-panel-controls.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProjectsListComponent } from './my-projects/projects-list/projects-list.component';
import { AccountControlsComponent } from './my-projects/account-controls/account-controls.component';

@NgModule({
  declarations: [
    MyAccountComponent,
    MyAccountPanelInfoComponent,
    MyAccountPanelControlsComponent,
    MyProjectsComponent,
    ProjectsListComponent,
    AccountControlsComponent,
  ],
  imports: [CommonModule, MyAccountRoutingModule, ResizableModule],
})
export class MyAccountModule {}
