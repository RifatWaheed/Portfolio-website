import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { NgFor } from '@angular/common';

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: ProjectTag[];
  icon: string;
  featured: boolean;
  githubUrl: string;
  highlights: string[];
  status: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [NgFor]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  isVisible = false;
  private observer!: IntersectionObserver;

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with secure checkout, product management, and real-time order tracking.',
      longDescription: 'A comprehensive e-commerce solution built with Angular for a responsive SPA frontend, Go for a high-performance REST API backend, PostgreSQL for reliable data persistence, and AWS SES for transactional email notifications including JWT-secured email verification flows.',
      tags: [
        { name: 'Angular', color: '#dd0031' },
        { name: 'Go', color: '#00add8' },
        { name: 'PostgreSQL', color: '#336791' },
        { name: 'JWT', color: '#d63aff' },
        { name: 'AWS SES', color: '#ff9900' }
      ],
      icon: 'fas fa-shopping-cart',
      featured: true,
      githubUrl: 'https://github.com/RifatWaheed',
      highlights: [
        'JWT email verification via AWS SES',
        'Real-time cart & inventory management',
        'Secure payment processing integration',
        'Admin dashboard with analytics'
      ],
      status: 'In Progress'
    },
    {
      title: 'ERP Management System',
      description: 'Enterprise resource planning system with approval workflows, billing, and comprehensive project management.',
      longDescription: 'A modular ERP platform designed for mid-to-large organizations, handling everything from project lifecycle management to automated billing cycles, multi-level approval workflows, and cross-department reporting — all in a unified Angular interface backed by a Go microservices architecture.',
      tags: [
        { name: 'Angular', color: '#dd0031' },
        { name: 'Go', color: '#00add8' },
        { name: 'PostgreSQL', color: '#336791' },
        { name: '.NET', color: '#512bd4' },
        { name: 'REST APIs', color: '#00d4ff' }
      ],
      icon: 'fas fa-sitemap',
      featured: true,
      githubUrl: 'https://github.com/RifatWaheed',
      highlights: [
        'Multi-tier approval workflow engine',
        'Automated billing & invoice generation',
        'Project & milestone tracking',
        'Role-based access control (RBAC)'
      ],
      status: 'In Progress'
    },
    {
      title: 'Authentication Service',
      description: 'Standalone, secure authentication microservice supporting OTP and token-based authentication with refresh token rotation.',
      longDescription: 'A production-ready authentication microservice implementing OTP-based verification, JWT access/refresh token rotation, rate limiting, and blacklist management — built with Go and FastAPI for high-throughput and easy integration into any application stack.',
      tags: [
        { name: 'Go', color: '#00add8' },
        { name: 'FastAPI', color: '#009688' },
        { name: 'JWT', color: '#d63aff' },
        { name: 'PostgreSQL', color: '#336791' },
        { name: 'AWS SES', color: '#ff9900' }
      ],
      icon: 'fas fa-shield-alt',
      featured: false,
      githubUrl: 'https://github.com/RifatWaheed',
      highlights: [
        'OTP-based email/SMS verification',
        'JWT access + refresh token rotation',
        'Rate limiting & brute-force protection',
        'Token blacklist with Redis caching'
      ],
      status: 'Completed'
    }
  ];

  expandedProject: number | null = null;

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

  toggleExpand(index: number): void {
    this.expandedProject = this.expandedProject === index ? null : index;
  }
}
