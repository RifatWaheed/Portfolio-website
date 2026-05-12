import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: []
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId!: number;
  private mouseX = 0;
  private mouseY = 0;

  displayedText = '';
  fullText = 'Full Stack Developer';
  private typingIndex = 0;
  private typingInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initCanvas();
    this.startTypingAnimation();
    this.animate();

    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    if (this.typingInterval) clearInterval(this.typingInterval);
    window.removeEventListener('mousemove', this.onMouseMove.bind(this));
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.createParticles();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private createParticles(): void {
    this.particles = [];
    const count = Math.floor((window.innerWidth * window.innerHeight) / 14000);
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle(window.innerWidth, window.innerHeight));
    }
  }

  private animate(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.particles.forEach(p => {
      p.update(this.mouseX, this.mouseY);
      p.draw(this.ctx);
    });

    this.drawConnections();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private drawConnections(): void {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.15;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  private startTypingAnimation(): void {
    setTimeout(() => {
      this.typingInterval = setInterval(() => {
        if (this.typingIndex < this.fullText.length) {
          this.displayedText += this.fullText[this.typingIndex];
          this.typingIndex++;
        } else {
          if (this.typingInterval) clearInterval(this.typingInterval);
        }
      }, 80);
    }, 1000);
  }

  private onMouseMove(e: MouseEvent): void {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  private onResize(): void {
    this.resizeCanvas();
    this.createParticles();
  }

  scrollTo(target: string): void {
    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseX: number;
  baseY: number;

  constructor(canvasW: number, canvasH: number) {
    this.x = Math.random() * canvasW;
    this.y = Math.random() * canvasH;
    this.baseX = this.x;
    this.baseY = this.y;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update(mouseX: number, mouseY: number): void {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
    if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;

    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100) {
      this.x -= dx * 0.03;
      this.y -= dy * 0.03;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
    ctx.fill();
  }
}
