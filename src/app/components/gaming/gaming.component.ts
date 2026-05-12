import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';

interface Achievement {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.scss'],
  imports: [NgFor]
})
export class GamingComponent implements OnInit, OnDestroy {
  isVisible = false;
  private observer!: IntersectionObserver;

  achievements: Achievement[] = [
    {
      icon: 'fas fa-trophy',
      title: '2× Football Champion',
      description: 'Intra-AUST Football Competition — back-to-back champion',
      color: '#ffd700'
    },
    {
      icon: 'fas fa-crosshairs',
      title: 'Valorant Content Creator',
      description: 'Gaming channel dedicated to Valorant gameplay highlights',
      color: '#ff4655'
    },
    {
      icon: 'fab fa-youtube',
      title: 'YouTube Creator',
      description: 'Gaming content & highlights on YouTube',
      color: '#ff0000'
    },
    {
      icon: 'fas fa-gamepad',
      title: 'Competitive Gamer',
      description: 'Passionate about strategy, teamwork, and high-skill gameplay',
      color: '#00d4ff'
    }
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
      { threshold: 0.1 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
