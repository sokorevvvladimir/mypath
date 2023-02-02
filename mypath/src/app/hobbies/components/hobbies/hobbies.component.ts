import {
    Component
} from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent {
     galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor() {

    }

    ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 5,
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
        small: 'assets/img/hobbies/1-small.jpeg',
        medium: 'assets/img/hobbies/1-medium.jpeg',
            big: 'assets/img/hobbies/1-big.jpeg',
        description: 'Our comedy duo "Go bite a bear"'
      },
      {
        small: 'assets/img/hobbies/2-small.jpeg',
        medium: 'assets/img/hobbies/2-medium.jpeg',
          big: 'assets/img/hobbies/2-big.jpeg',
        description: 'Comedy show night'
      },
      {
        small: 'assets/img/hobbies/3-small.jpeg',
        medium: 'assets/img/hobbies/3-medium.jpeg',
          big: 'assets/img/hobbies/3-big.jpeg',
        description: 'Me performing on Pioneer XDJ-1000'
      },{
        small: 'assets/img/hobbies/4-small.jpeg',
        medium: 'assets/img/hobbies/4-medium.jpeg',
          big: 'assets/img/hobbies/4-big.jpeg',
        description: 'My favorite movie directors: Nolan and Tarantino'
      },
      {
        small: 'assets/img/hobbies/5-small.jpeg',
        medium: 'assets/img/hobbies/5-medium.jpeg',
          big: 'assets/img/hobbies/5-big.jpeg',
        description: 'My favorite football team: Real Madrid'
        }
    ];
  }
}