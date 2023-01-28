import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { WarComponent } from './components/war/war.component';
import { WarRoutingModule } from './war-routing.module';

@NgModule({
  declarations: [
    WarComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    WarRoutingModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WarModule { }