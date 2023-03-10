import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    HomeRoutingModule,
    MatRippleModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }