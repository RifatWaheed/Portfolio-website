import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  /**
   * Smooth scroll to a section by ID with navbar offset.
   */
  scrollTo(targetId: string, offset: number = 80): void {
    const el = document.getElementById(targetId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  /**
   * Scroll back to top of page.
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Returns the current scroll percentage (0–100).
   */
  getScrollProgress(): number {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
  }

  /**
   * Returns the ID of the section currently in view.
   */
  getActiveSection(sectionIds: string[], offset: number = 120): string {
    const scrollPos = window.scrollY + offset;
    let active = sectionIds[0];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        active = id;
      }
    }
    return active;
  }
}
