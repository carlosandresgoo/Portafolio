  import { Component, ElementRef, HostListener, } from '@angular/core';

  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
  })
  export class NavbarComponent {

    navbarScrolled: boolean = false;

    constructor(private el: ElementRef) { }

    ngOnInit() {
      this.updateNavbarStyles();
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.navbarScrolled = scrollPosition > 80;

      this.updateNavbarStyles();
    }

    updateNavbarStyles() {
      const navbarElement = this.el.nativeElement.querySelector('.custom-navbar');

      if (navbarElement) {
        if (this.navbarScrolled) {
          navbarElement.style.background = 'rgb(230, 230, 230)';
        } else {
          navbarElement.style.background = 'rgba(255, 255, 255, 0.01)';
        }
      }

      const links = this.el.nativeElement.querySelectorAll('.nav-link');
      const h2 = this.el.nativeElement.querySelector('h2');

      const color = this.navbarScrolled ? 'black' : 'white';
      const marginTop = this.navbarScrolled ? '0' : '';

      if (links) {
        links.forEach((link: { style: { color: string; marginTop: string } }) => {
          link.style.color = color;
          link.style.marginTop = marginTop;
        });
      }

      if (h2) {
        h2.style.color = color;
        h2.style.marginTop = marginTop;
      }
    }
  }
