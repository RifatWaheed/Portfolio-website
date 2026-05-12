import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';

interface TechItem {
  name: string;
  icon: string;
  category: string;
  level: number;
}

interface TechCategory {
  name: string;
  icon: string;
  items: TechItem[];
}

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  imports: [NgFor]
})
export class TechStackComponent implements OnInit, OnDestroy {
  isVisible = false;
  private observer!: IntersectionObserver;

  categories: TechCategory[] = [
    {
      name: 'Languages',
      icon: 'fas fa-code',
      items: [
        { name: 'TypeScript', icon: 'ts', category: 'lang', level: 90 },
        { name: 'Python', icon: 'py', category: 'lang', level: 80 },
        { name: 'Go', icon: 'go', category: 'lang', level: 85 },
        { name: 'C# / .NET', icon: 'cs', category: 'lang', level: 70 },
        { name: 'SQL', icon: 'sq', category: 'lang', level: 85 }
      ]
    },
    {
      name: 'Frontend & Frameworks',
      icon: 'fas fa-layer-group',
      items: [
        { name: 'Angular', icon: 'ng', category: 'frontend', level: 92 },
        { name: 'FastAPI', icon: 'fa', category: 'frontend', level: 78 },
        { name: 'REST APIs', icon: 'api', category: 'frontend', level: 90 }
      ]
    },
    {
      name: 'Infrastructure & Tools',
      icon: 'fas fa-server',
      items: [
        { name: 'PostgreSQL', icon: 'pg', category: 'infra', level: 85 },
        { name: 'AWS SES', icon: 'aws', category: 'infra', level: 75 },
        { name: 'JWT Auth', icon: 'jwt', category: 'infra', level: 88 },
        { name: 'Git', icon: 'git', category: 'infra', level: 90 }
      ]
    }
  ];

  allTech = [
    { name: 'TypeScript', color: '#3178c6', abbr: 'TS' },
    { name: 'Angular', color: '#dd0031', abbr: 'NG' },
    { name: 'Go', color: '#00add8', abbr: 'GO' },
    { name: 'Python', color: '#3776ab', abbr: 'PY' },
    { name: 'FastAPI', color: '#009688', abbr: 'FA' },
    { name: 'PostgreSQL', color: '#336791', abbr: 'PG' },
    { name: '.NET / C#', color: '#512bd4', abbr: 'C#' },
    { name: 'AWS SES', color: '#ff9900', abbr: 'AWS' },
    { name: 'JWT', color: '#d63aff', abbr: 'JWT' },
    { name: 'SQL', color: '#00758f', abbr: 'SQL' },
    { name: 'Git', color: '#f05032', abbr: 'GIT' },
    { name: 'REST APIs', color: '#00d4ff', abbr: 'API' }
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
