import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { PathHereComponent } from './components/path-here/path-here.component';
import { PathHereRoutingModule } from './path-here-routing.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [
    PathHereComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    PathHereRoutingModule,
    NgxGalleryModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PathHereModule { }