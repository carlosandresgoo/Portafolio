  import { Component, ElementRef, HostListener, } from '@angular/core';
  import { Router } from '@angular/router';

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
          navbarElement.style.background = 'rgb(156, 155, 155)';
          navbarElement.style.background = 'radial-gradient(circle, rgba(156,155,155,1) 1%, rgba(162,161,162,1) 23%, rgba(173,173,174,1) 66%)';
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
