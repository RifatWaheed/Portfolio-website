import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';

interface Stat {
  value: string;
  label: string;
  icon: string;
}

interface Interest {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [NgFor]
})
export class AboutComponent implements OnInit, OnDestroy {
  isVisible = false;
  private observer!: IntersectionObserver;

  stats: Stat[] = [
    { value: '3+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
    { value: '10+', label: 'Projects Built', icon: 'fas fa-code' },
    // { value: 'BSc', label: 'Ahsanullah University', icon: 'fas fa-graduation-cap' },
    { value: '∞', label: 'Lines of Code', icon: 'fas fa-terminal' }
  ];

  interests: Interest[] = [
    { icon: 'fas fa-puzzle-piece', label: 'Problem Solving' },
    { icon: 'fas fa-drafting-compass', label: 'System Design' },
    { icon: 'fas fa-layer-group', label: 'Clean Architecture' },
    { icon: 'fas fa-gamepad', label: 'Gaming' },
    { icon: 'fas fa-video', label: 'Content Creation' },
    { icon: 'fas fa-futbol', label: 'Football' }
  ];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
