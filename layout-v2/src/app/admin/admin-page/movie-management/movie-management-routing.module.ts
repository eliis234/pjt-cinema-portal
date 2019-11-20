import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieManagementComponent } from './movie-management.component';
import { AuthGuard } from 'src/app/_core/guards/auth.guard';

const routes: Routes = [
  {path:"", component: MovieManagementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieManagementRoutingModule { }
