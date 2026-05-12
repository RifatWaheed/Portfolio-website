import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [NgFor]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Stack', target: 'tech-stack' },
    { label: 'Projects', target: 'projects' },
    { label: 'Gaming', target: 'gaming' },
    { label: 'Contact', target: 'contact' }
  ];

  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/RifatWaheed', label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/rifat-waheed-990830248', label: 'LinkedIn' },
    { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@rifatwaheed2105', label: 'YouTube' },
    { icon: 'fas fa-envelope', url: 'mailto:rifat@rifatwaheed.com', label: 'Email' }
  ];

  scrollTo(target: string): void {
    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
