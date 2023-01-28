import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarComponent } from './components/war/war.component';

const routes: Routes = [
  {
    path: '',
    component: WarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarRoutingModule { }