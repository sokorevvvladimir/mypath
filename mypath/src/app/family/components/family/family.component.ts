import {
    Component
} from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
    selector: 'app-family',
    templateUrl: './family.component.html',
    styleUrls: ['./family.component.css'],
})
export class FamilyComponent {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    
    constructor() {

    }

    ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 9,
        imageAnimation: NgxGalleryAnimation.Slide,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right'
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        imageArrows: true,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/family/1-small.jpeg',
        medium: 'assets/img/family/1-medium.jpeg',
            big: 'assets/img/family/1-big.jpeg',
        description: 'My parents wedding'
      },
      {
        small: 'assets/img/family/2-small.jpeg',
        medium: 'assets/img/family/2-medium.jpeg',
          big: 'assets/img/family/2-big.jpeg',
        description: 'Still wedding'
      },
      {
        small: 'assets/img/family/3-small.jpeg',
        medium: 'assets/img/family/3-medium.jpeg',
          big: 'assets/img/family/3-big.jpeg',
        description: 'Mother, me and some friend'
      },{
        small: 'assets/img/family/4-small.jpeg',
        medium: 'assets/img/family/4-medium.jpeg',
          big: 'assets/img/family/4-big.jpeg',
        description: 'First day in school'
      },
      {
        small: 'assets/img/family/5-small.jpeg',
        medium: 'assets/img/family/5-medium.jpeg',
          big: 'assets/img/family/5-big.jpeg',
        description: 'My university family'
        },
      {
        small: 'assets/img/family/6-small.jpeg',
        medium: 'assets/img/family/6-medium.jpeg',
          big: 'assets/img/family/6-big.jpeg',
        description: 'Last day at Kherson State University. My Spanish-english group #581'
      },
      {
        small: 'assets/img/family/7-small.jpeg',
        medium: 'assets/img/family/7-medium.jpeg',
          big: 'assets/img/family/7-big.jpeg',
        description: 'My family in Plantation: Juliana, Kathleen, Brandon'
      },
      {
        small: 'assets/img/family/8-small.jpeg',
        medium: 'assets/img/family/8-medium.jpeg',
          big: 'assets/img/family/8-big.jpeg',
        description: 'Mike and Brandon'
      },
      {
        small: 'assets/img/family/9-small.jpeg',
        medium: 'assets/img/family/9-medium.jpeg',
          big: 'assets/img/family/9-big.jpeg',
        description: 'Kathi'
        }
    ];
  }
}