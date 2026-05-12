import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface SocialLink {
  icon: string;
  label: string;
  value: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [NgFor, NgIf, ReactiveFormsModule]
})
export class ContactComponent implements OnInit, OnDestroy {
  isVisible = false;
  private observer!: IntersectionObserver;

  contactForm!: FormGroup;
  isSubmitting = false;
  isSubmitted = false;
  submitError = false;

  socialLinks: SocialLink[] = [
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'RifatWaheed',
      url: 'https://github.com/RifatWaheed',
      color: '#e8edf5'
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      value: 'rifat-waheed-990830248',
      url: 'https://www.linkedin.com/in/rifat-waheed-990830248',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-youtube',
      label: 'YouTube',
      value: '@rifatwaheed2105',
      url: 'https://www.youtube.com/@rifatwaheed2105',
      color: '#ff0000'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'rifat@rifatwaheed.com',
      url: 'mailto:rifat@rifatwaheed.com',
      color: '#00d4ff'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });

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

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = false;

    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;
      this.contactForm.reset();
    }, 1500);
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.contactForm.reset();
  }
}
