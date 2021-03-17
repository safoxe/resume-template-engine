import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
  },
  {
    path: 'my-projects',
    component: MyProjectsComponent,
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountRoutingModule {}
