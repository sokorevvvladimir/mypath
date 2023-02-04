import {
    Component, OnInit
} from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-war',
    templateUrl: './war.component.html',
    styleUrls: ['./war.component.css'],
})
export class WarComponent implements OnInit {
    @HostListener('window:scroll', ['$event'])
        
        ngOnInit(): void {
        this.scrollFunction();
        this.onWindowScroll();
    };

    public onWindowScroll(): void {
        let oda = document.querySelector('.oda') as HTMLElement;
        let stopTheWar = document.querySelector('.stopTheWar') as HTMLElement;

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
    public goUp(): void{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    public scrollFunction(): void {
        let toTop = document.querySelector('.to-top') as HTMLElement;
        console.log(toTop);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.visibility = "visible";
    } else {
        toTop.style.visibility = "hidden";
    }
    }
    
    
}