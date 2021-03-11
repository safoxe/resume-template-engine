import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldMenuComponent } from './components/scaffold-menu/scaffold-menu.component';
import { TemplateEngineComponent } from './components/template-engine/template-engine.component';

const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },
  {
    path: 'scaffold-menu',
    component: ScaffoldMenuComponent,
  },
  {
    path: 'template-engine',
    component: TemplateEngineComponent,
  },
  {
    path: 'log-in',
    loadChildren: () => import('./modules/log-in/log-in.module').then((m) => m.LogInModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'project-creation',
    loadChildren: () =>
      import('./modules/project-creation/project-creation.module').then(
        (m) => m.ProjectCreationModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
