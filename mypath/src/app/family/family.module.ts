import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { FamilyComponent } from './components/family/family.component';
import { FamilyRoutingModule } from './family-routing.module';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [
    FamilyComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    FamilyRoutingModule,
    NgxGalleryModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FamilyModule { }