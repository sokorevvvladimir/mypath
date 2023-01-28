import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathHereComponent } from './components/path-here/path-here.component';

const routes: Routes = [
  {
    path: '',
    component: PathHereComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathHereRoutingModule { }