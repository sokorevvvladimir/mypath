import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';
import { UkraineComponent } from './components/ukraine/ukraine.component';
import { UkraineRoutingModule } from './ukraine-routing.module';
// import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  declarations: [
    UkraineComponent,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    UkraineRoutingModule,
    // HttpClientModule,
    NgxGalleryModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UkraineModule { }