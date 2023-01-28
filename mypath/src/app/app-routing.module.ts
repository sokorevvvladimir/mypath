import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'ukraine', loadChildren: () => import('./ukraine/ukraine.module').then(m => m.UkraineModule) },
  { path: 'family', loadChildren: () => import('./family/family.module').then(m => m.FamilyModule) },
  { path: 'previous-work', loadChildren: () => import('./previous-work/previous-work.module').then(m => m.PreviousWorkModule) },
  { path: 'hobbies', loadChildren: () => import('./hobbies/hobbies.module').then(m => m.HobbiesModule) },
  { path: 'war', loadChildren: () => import('./war/war.module').then(m => m.WarModule) },
  { path: 'path-here', loadChildren: () => import('./path-here/path-here.module').then(m => m.PathHereModule) },
  { path: '**', component: NotfoundComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
