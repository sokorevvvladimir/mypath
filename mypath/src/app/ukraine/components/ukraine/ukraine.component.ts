import {
    Component, OnInit
} from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
    selector: 'app-ukraine',
    templateUrl: './ukraine.component.html',
    styleUrls: ['./ukraine.component.css'],
})
export class UkraineComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    
    constructor() {

    }

    ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 10,
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
        small: 'assets/img/gallery/1-small.jpeg',
        medium: 'assets/img/gallery/1-medium.jpeg',
            big: 'assets/img/gallery/1-big.jpeg',
        description: 'Ukrainian flag'
      },
      {
        small: 'assets/img/gallery/2-small.jpeg',
        medium: 'assets/img/gallery/2-medium.jpeg',
          big: 'assets/img/gallery/2-big.jpeg',
        description: 'Kyiv Pechersk Lavra'
      },
      {
        small: 'assets/img/gallery/3-small.jpeg',
        medium: 'assets/img/gallery/3-medium.jpeg',
          big: 'assets/img/gallery/3-big.jpeg',
        description: 'Odessa National Academic Opera and Ballet Theatre'
      },{
        small: 'assets/img/gallery/4-small.jpeg',
        medium: 'assets/img/gallery/4-medium.jpeg',
          big: 'assets/img/gallery/4-big.jpeg',
        description: 'Lviv, historical centre'
      },
      {
        small: 'assets/img/gallery/5-small.jpeg',
        medium: 'assets/img/gallery/5-medium.jpeg',
          big: 'assets/img/gallery/5-big.jpeg',
        description: 'Kherson Art Museum'
        },
      {
        small: 'assets/img/gallery/6-small.jpeg',
        medium: 'assets/img/gallery/6-medium.jpeg',
          big: 'assets/img/gallery/6-big.jpeg',
        description: 'Kherson Region State Administration'
        },
       {
        small: 'assets/img/gallery/7-small.jpeg',
        medium: 'assets/img/gallery/7-medium.jpeg',
          big: 'assets/img/gallery/7-big.jpeg',
        description: 'Kherson Railway Station'
        },
       {
        small: 'assets/img/gallery/8-small.jpeg',
        medium: 'assets/img/gallery/8-medium.jpeg',
          big: 'assets/img/gallery/8-big.jpeg',
        description: 'Kherson central street in winter'
        },
       {
        small: 'assets/img/gallery/9-small.jpeg',
        medium: 'assets/img/gallery/9-medium.jpeg',
          big: 'assets/img/gallery/9-big.jpeg',
        description: 'Kherson region seashore'
        },
       {
        small: 'assets/img/gallery/10-small.jpeg',
        medium: 'assets/img/gallery/10-medium.jpeg',
          big: 'assets/img/gallery/10-big.jpeg',
        description: 'Kherson region seashore'
      }
    ];
  }
}