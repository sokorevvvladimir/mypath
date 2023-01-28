import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UkraineComponent } from './components/ukraine/ukraine.component';

const routes: Routes = [
  {
    path: '',
    component: UkraineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UkraineRoutingModule { }