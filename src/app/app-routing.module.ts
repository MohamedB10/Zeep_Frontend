import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/zeep_frontend/admin', pathMatch:'full' },
  { path: 'zeep_frontend/public', loadChildren: () => import('./features/public/public.module').then(p => p.PublicModule)},
  { path: 'zeep_frontend/admin', loadChildren: () => import('./features/admin/admin.module').then(p => p.AdminModule)},
  { path: 'zeep_frontend', redirectTo: '/zeep_frontend/admin', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
