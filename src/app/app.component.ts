import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GamingComponent } from './components/gaming/gaming.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavbarComponent, HeroComponent, AboutComponent, TechStackComponent, ProjectsComponent, GamingComponent, ContactComponent, FooterComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading = true;
  scrollProgress = 0;

  private cursorDot: HTMLElement | null = null;
  private cursorRing: HTMLElement | null = null;
  private ringX = 0;
  private ringY = 0;
  private mouseX = 0;
  private mouseY = 0;
  private rafId!: number;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.initCursor();
    }, 1800);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  }

  private initCursor(): void {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    this.cursorDot = document.getElementById('cursorDot');
    this.cursorRing = document.getElementById('cursorRing');

    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      if (this.cursorDot) {
        this.cursorDot.style.left = e.clientX + 'px';
        this.cursorDot.style.top = e.clientY + 'px';
      }
    });

    const animateRing = () => {
      this.ringX += (this.mouseX - this.ringX) * 0.15;
      this.ringY += (this.mouseY - this.ringY) * 0.15;
      if (this.cursorRing) {
        this.cursorRing.style.left = this.ringX + 'px';
        this.cursorRing.style.top = this.ringY + 'px';
      }
      this.rafId = requestAnimationFrame(animateRing);
    };
    animateRing();

    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea');
      if (this.cursorRing && isInteractive) {
        this.cursorRing.style.width = '50px';
        this.cursorRing.style.height = '50px';
        this.cursorRing.style.borderColor = 'rgba(0, 212, 255, 0.7)';
      }
    });

    document.addEventListener('mouseout', () => {
      if (this.cursorRing) {
        this.cursorRing.style.width = '32px';
        this.cursorRing.style.height = '32px';
        this.cursorRing.style.borderColor = 'rgba(0, 212, 255, 0.4)';
      }
    });
  }
}
