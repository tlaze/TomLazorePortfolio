import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('marquee', { static: true }) marquee!: ElementRef<HTMLDivElement>;

  techs = [
    { name: 'Angular',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'React',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'NestJS',       src: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/nestjs/nestjs-original.svg' },
    { name: 'Express',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/Tailwindcss' },
    { name: 'Python',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'PWA',          src: 'https://images.seeklogo.com/logo-png/36/2/progressive-web-apps-logo-png_seeklogo-368489.png' },
    { name: 'AWS',          src: 'https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Azure',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Postgres',     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'OpenAI',       src: 'https://cdn.simpleicons.org/OpenAI' },
    { name: 'Docker',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

    ngAfterViewInit() {
    const container = this.marquee.nativeElement;
    // Scroll speed in pixels per second
    const speed = 100;
    let lastTime = performance.now();

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      container.scrollLeft += (speed * delta) / 1000;
      // When we've scrolled half the scrollWidth (one full set), jump back
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}
