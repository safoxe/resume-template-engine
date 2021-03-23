import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { Layout } from './components/main/types/layout.type';
import { ScaffoldMenuComponent } from './components/scaffold-menu/scaffold-menu.component';
import { TemplateEngineComponent } from './components/template-engine/template-engine.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { layout: Layout.default } },
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
    data: { layout: Layout.default },
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./modules/sign-up/sign-up.module').then((m) => m.SignUpModule),
    data: { layout: Layout.default },
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: { layout: Layout.default },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'project-creation',
    loadChildren: () =>
      import('./modules/project-creation/project-creation.module').then(
        (m) => m.ProjectCreationModule,
      ),
    data: { layout: Layout.default },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'my-account',
    loadChildren: () =>
      import('./modules/my-account/my-account.module').then((m) => m.MyAccountModule),
    data: { layout: Layout.default },
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
