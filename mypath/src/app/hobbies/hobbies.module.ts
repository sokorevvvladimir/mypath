import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HobbiesRoutingModule } from './hobbies-routing.module';

@NgModule({
  declarations: [
    HobbiesComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    HobbiesRoutingModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HobbiesModule { }