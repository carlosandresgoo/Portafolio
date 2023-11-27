import { Component, ElementRef, HostListener, } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbarScrolled: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.removeScrolledStyles();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.navbarScrolled = scrollPosition > 550;

    if (this.navbarScrolled) {
      this.applyScrolledStyles();
    } else {
      this.removeScrolledStyles();
    }
  }
  applyScrolledStyles() {
    const navbarElement = this.el.nativeElement.querySelector('.custom-navbar');

    if (navbarElement) {
      navbarElement.style.backgroundColor = 'white';
    }
    const links = this.el.nativeElement.querySelectorAll('.nav-link');
    const h2 = this.el.nativeElement.querySelector('h2');

    if (links) {
      links.forEach((link: { style: { color: string; }; }) => {
        link.style.color = 'black';
      });
    }

    if (h2) {
      h2.style.color = 'black';
    }
  }
  removeScrolledStyles() {
    const navbarElement = this.el.nativeElement.querySelector('.custom-navbar');

    if (navbarElement) {
      navbarElement.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
    }

    const links = this.el.nativeElement.querySelectorAll('.nav-link');
    const h2 = this.el.nativeElement.querySelector('h2');

    if (links) {
      links.forEach((link: { style: { color: string; }; }) => {
        link.style.color = 'white';
      });
    }

    if (h2) {
      h2.style.color = 'white';
    }
  }

}
