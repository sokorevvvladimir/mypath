import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviousWorkComponent } from './components/previous-work/previous-work.component';

const routes: Routes = [
  {
    path: '',
    component: PreviousWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviousWorkRoutingModule { }