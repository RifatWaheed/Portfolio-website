import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';

interface NavLink {
  label: string;
  target: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [NgFor]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';

  navLinks: NavLink[] = [
    { label: 'About', target: 'about' },
    { label: 'Stack', target: 'tech-stack' },
    { label: 'Projects', target: 'projects' },
    { label: 'Gaming', target: 'gaming' },
    { label: 'Contact', target: 'contact' }
  ];

  ngOnInit(): void {
    this.checkScroll();
  }

  ngOnDestroy(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
    this.updateActiveSection();
  }

  private checkScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  private updateActiveSection(): void {
    const sections = ['hero', 'about', 'tech-stack', 'projects', 'gaming', 'contact'];
    const scrollPos = window.scrollY + 120;

    for (const section of sections.reverse()) {
      const el = document.getElementById(section);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection = section;
        break;
      }
    }
  }

  scrollTo(target: string): void {
    const el = document.getElementById(target);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
