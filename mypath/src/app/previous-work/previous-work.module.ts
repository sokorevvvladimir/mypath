import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { PreviousWorkComponent } from './components/previous-work/previous-work.component';
import { PreviousWorkRoutingModule } from './previous-work-routing.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [
    PreviousWorkComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    PreviousWorkRoutingModule,
    NgxGalleryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PreviousWorkModule { }