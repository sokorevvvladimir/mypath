import {
    Component
} from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
    
export class HomeComponent {
     greetings = 'Welcome everyone! Bienvenidos a todos! Xin chào mọi người! Ласкаво просимо! Sejam todos bem-vindos! !ברוכים הבאים'
     @HostListener('window:scroll', ['$event'])
    
     onWindowScroll() {
    let list = document.querySelector('.list') as HTMLElement;
   
         switch (true) {
            
             case window.scrollY > 1 && window.scrollY < 400:
                 list.classList.remove('color-violet');
                 list.classList.add('color-white');
                 break;
             case window.scrollY > 401 && window.scrollY < 800:
                 list.classList.remove('color-indigo');
                 list.classList.remove('color-white');
                 list.classList.add('color-violet');
                 break;
             case window.scrollY > 801 && window.scrollY < 1200:
                 list.classList.remove('color-violet');
                 list.classList.remove('color-blue');
                 list.classList.add('color-indigo');
                 break;
             case window.scrollY > 1201 && window.scrollY < 1600:
                 list.classList.remove('color-indigo');
                 list.classList.remove('color-green');
                 list.classList.add('color-blue');
                 break;
             case window.scrollY > 1601 && window.scrollY < 2000:
                 list.classList.remove('color-blue');
                 list.classList.remove('color-orange');
                 list.classList.add('color-green');
                 break;
             case window.scrollY > 2001 && window.scrollY < 2400:
                 list.classList.remove('color-green');
                 list.classList.remove('color-red');
                 list.classList.add('color-orange');
                 break;
             case window.scrollY > 2801 && window.scrollY < 3200:
                 list.classList.remove('color-orange');
                 list.classList.add('color-red');
                 break;
             default:
                 return;
         }
       
  }
}