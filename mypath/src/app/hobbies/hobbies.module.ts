import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { HobbiesRoutingModule } from './hobbies-routing.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [
    HobbiesComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    HobbiesRoutingModule,
    NgxGalleryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HobbiesModule { }