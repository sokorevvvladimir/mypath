import {
    Component, OnInit
} from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
    selector: 'app-path-here',
    templateUrl: './path-here.component.html',
    styleUrls: ['./path-here.component.css'],
})
export class PathHereComponent implements OnInit {

     galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    
    constructor() {

    }

    ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 25,
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
        small: 'assets/img/path-here/1-small.jpeg',
        medium: 'assets/img/path-here/1-medium.jpeg',
            big: 'assets/img/path-here/1-big.jpeg',
        description: 'Warsaw, Poland. Palace of culture and science'
      },
      {
        small: 'assets/img/path-here/2-small.jpeg',
        medium: 'assets/img/path-here/2-medium.jpeg',
          big: 'assets/img/path-here/2-big.jpeg',
        description: 'Entering Madrid'
      },
      {
        small: 'assets/img/path-here/3-small.jpeg',
        medium: 'assets/img/path-here/3-medium.jpeg',
          big: 'assets/img/path-here/3-big.jpeg',
        description: 'Walking to Santiago Bernabeu, Real Madrid home arena'
      },{
        small: 'assets/img/path-here/4-small.jpeg',
        medium: 'assets/img/path-here/4-medium.jpeg',
          big: 'assets/img/path-here/4-big.jpeg',
        description: 'Santiago Bernabeu stadium'
      },
      {
        small: 'assets/img/path-here/5-small.jpeg',
        medium: 'assets/img/path-here/5-medium.jpeg',
          big: 'assets/img/path-here/5-big.jpeg',
        description: 'Real Madrid official store in the stadium'
        },
      {
        small: 'assets/img/path-here/6-small.jpeg',
        medium: 'assets/img/path-here/6-medium.jpeg',
          big: 'assets/img/path-here/6-big.jpeg',
        description: 'Official home kit'
        },
       {
        small: 'assets/img/path-here/7-small.jpeg',
        medium: 'assets/img/path-here/7-medium.jpeg',
          big: 'assets/img/path-here/7-big.jpeg',
        description: 'Some glimpses of Madrid'
        },
       {
        small: 'assets/img/path-here/8-small.jpeg',
        medium: 'assets/img/path-here/8-medium.jpeg',
          big: 'assets/img/path-here/8-big.jpeg',
        description: 'Somewhere on Gran Via, the main artery of Madrid'
        },
       {
        small: 'assets/img/path-here/9-small.jpeg',
        medium: 'assets/img/path-here/9-medium.jpeg',
          big: 'assets/img/path-here/9-big.jpeg',
        description: 'Royal Palace of Madrid'
        },
       {
        small: 'assets/img/path-here/10-small.jpeg',
        medium: 'assets/img/path-here/10-medium.jpeg',
          big: 'assets/img/path-here/10-big.jpeg',
        description: 'Some more of Royal Palace'
        },
       {
        small: 'assets/img/path-here/11-small.jpeg',
        medium: 'assets/img/path-here/11-medium.jpeg',
          big: 'assets/img/path-here/11-big.jpeg',
        description: 'Almudena Cathedral'
        },
       {
        small: 'assets/img/path-here/12-small.jpeg',
        medium: 'assets/img/path-here/12-medium.jpeg',
          big: 'assets/img/path-here/12-big.jpeg',
        description: 'Somewhere near San Miguel market'
        },
       {
        small: 'assets/img/path-here/13-small.jpeg',
        medium: 'assets/img/path-here/13-medium.jpeg',
          big: 'assets/img/path-here/13-big.jpeg',
        description: 'La Plaza Mayor / Major Square'
        },
       {
        small: 'assets/img/path-here/14-small.jpeg',
        medium: 'assets/img/path-here/14-medium.jpeg',
          big: 'assets/img/path-here/14-big.jpeg',
        description: 'Narrow intricate alleys near La Plaza Mayor'
        },
       {
        small: 'assets/img/path-here/15-small.jpeg',
        medium: 'assets/img/path-here/15-medium.jpeg',
          big: 'assets/img/path-here/15-big.jpeg',
        description: 'City Council of Madrid'
        },
       {
        small: 'assets/img/path-here/16-small.jpeg',
        medium: 'assets/img/path-here/16-medium.jpeg',
          big: 'assets/img/path-here/16-big.jpeg',
        description: 'Door of Alcalá / La Puerta de Alcalá (dated 1778)'
        },
       {
        small: 'assets/img/path-here/17-small.jpeg',
        medium: 'assets/img/path-here/17-medium.jpeg',
          big: 'assets/img/path-here/17-big.jpeg',
        description: 'Somewhere around Gran Via'
        },
       {
        small: 'assets/img/path-here/18-small.jpeg',
        medium: 'assets/img/path-here/18-medium.jpeg',
          big: 'assets/img/path-here/18-big.jpeg',
        description: 'Heading from Madrid to Segovia to ride some horses'
        },
       {
        small: 'assets/img/path-here/19-small.jpeg',
        medium: 'assets/img/path-here/19-medium.jpeg',
          big: 'assets/img/path-here/19-big.jpeg',
        description: 'Segovia'
        },
       {
        small: 'assets/img/path-here/20-small.jpeg',
        medium: 'assets/img/path-here/20-medium.jpeg',
          big: 'assets/img/path-here/20-big.jpeg',
        description: 'My apartment buddy in Madrid'
      }
    ];
  }
}