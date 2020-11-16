import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaffoldMenuComponent } from './components/scaffold-menu/scaffold-menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'scaffold-menu', pathMatch: 'full' },
  {
    path: 'scaffold-menu',
    component: ScaffoldMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
