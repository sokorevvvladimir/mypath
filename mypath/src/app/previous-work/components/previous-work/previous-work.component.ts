import {
    Component
} from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';


@Component({
    selector: 'app-previous-work',
    templateUrl: './previous-work.component.html',
    styleUrls: ['./previous-work.component.css'],
})
export class PreviousWorkComponent {
     galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    neonLightOne: string = 'click';
    neonLightTwo: string = 'on the';
    neonLightThree: string = 'image';

    constructor() {

    }

    ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 6,
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
        small: 'assets/img/previous-work/1-small.jpeg',
        medium: 'assets/img/previous-work/1-medium.jpeg',
            big: 'assets/img/previous-work/1-big.jpeg',
        description: 'Kherson port'
      },
      {
        small: 'assets/img/previous-work/2-small.jpeg',
        medium: 'assets/img/previous-work/2-medium.jpeg',
          big: 'assets/img/previous-work/2-big.jpeg',
        description: 'Bulker at Kherson port roads'
      },
      {
        small: 'assets/img/previous-work/3-small.jpeg',
        medium: 'assets/img/previous-work/3-medium.jpeg',
          big: 'assets/img/previous-work/3-big.jpeg',
        description: 'Climbing from the boat to the vessel'
      },{
        small: 'assets/img/previous-work/4-small.jpeg',
        medium: 'assets/img/previous-work/4-medium.jpeg',
          big: 'assets/img/previous-work/4-big.jpeg',
        description: 'Loading of steel coils'
      },
      {
        small: 'assets/img/previous-work/5-small.jpeg',
        medium: 'assets/img/previous-work/5-medium.jpeg',
          big: 'assets/img/previous-work/5-big.jpeg',
        description: 'Loading of wheat'
        },
      {
        small: 'assets/img/previous-work/6-small.jpeg',
        medium: 'assets/img/previous-work/6-medium.jpeg',
          big: 'assets/img/previous-work/6-big.jpeg',
        description: 'Icebreaker'
        },
    ];
  }
}