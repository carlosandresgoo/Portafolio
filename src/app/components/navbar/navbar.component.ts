import { Component, ElementRef, HostListener, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

navbarScrolled: boolean = false;

constructor(private el: ElementRef, private router: Router) {}

ngOnInit() {
  this.removeScrolledStyles();
}

@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.navbarScrolled = scrollPosition > 80;

  if (this.navbarScrolled) {
    this.applyScrolledStyles();
  } else {
    this.removeScrolledStyles();
  }
}

applyScrolledStyles() {
  const navbarElement = this.el.nativeElement.querySelector('.custom-navbar');

  if (navbarElement && !navbarElement.classList.contains('fixed-navbar')) {
    navbarElement.classList.add('fixed-navbar');
    navbarElement.style.backgroundColor = 'white';
    navbarElement.classList.add('show');
  }

  const links = this.el.nativeElement.querySelectorAll('.nav-link');
  const h2 = this.el.nativeElement.querySelector('h2');

  if (links) {
    links.forEach((link: { style: { color: string; marginTop: string; marginRight: string } }) => {
      link.style.color = 'black';
      link.style.marginTop = '0';
    });
  }

  if (h2) {
    h2.style.color = 'black';
    h2.style.marginTop = '0';
  }
}

removeScrolledStyles() {
  const navbarElement = this.el.nativeElement.querySelector('.custom-navbar');

  if (navbarElement && navbarElement.classList.contains('fixed-navbar')) {
    navbarElement.classList.remove('fixed-navbar');
    navbarElement.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
    navbarElement.classList.remove('show');
  }

  const links = this.el.nativeElement.querySelectorAll('.nav-link');
  const h2 = this.el.nativeElement.querySelector('h2');

  if (links) {
    links.forEach((link: { style: { color: string; marginTop: string; marginRight: string } }) => {
      link.style.color = 'white';
      link.style.marginTop = '';
    });
  }

  if (h2) {
    h2.style.color = 'white';
    h2.style.marginTop = '';
  }
}

}
