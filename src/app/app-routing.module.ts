import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

 const routes: Routes = [
  { path: 'userData', component: DashboardComponent },
  { path: '**', redirectTo: 'userData' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false, enableTracing: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
