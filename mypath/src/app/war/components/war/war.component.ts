import {
    Component
} from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-war',
    templateUrl: './war.component.html',
    styleUrls: ['./war.component.css'],
})
export class WarComponent {
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
        let oda = document.querySelector('.oda') as HTMLElement;
        let stopTheWar = document.querySelector('.stopTheWar') as HTMLElement;

        console.log(window.scrollY);
        if (window.scrollY > 4000) {
            oda.classList.add('fadeOut');
            stopTheWar.classList.add('abc');
            return;
        }
        if (window.scrollY < 3999) {
            oda.classList.remove('fadeOut');
            stopTheWar.classList.remove('abc');
            return;
        }
    }
}