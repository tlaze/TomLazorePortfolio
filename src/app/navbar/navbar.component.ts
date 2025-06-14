import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen = false;
  isDark = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.isDark = localStorage.getItem('theme') === 'dark';
    this.updateBodyClass();
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isDark) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }

  scrollTo(sectionId: string) {
    const container = document.getElementById('scrollContainer');
    const section   = document.getElementById(sectionId);
    const nav       = document.querySelector('nav');
    if (container && section && nav) {
      const navHeight = nav.clientHeight;
      // section.offsetTop is relative to the container’s top if container is the offsetParent
      const targetY = section.offsetTop - navHeight;
      container.scrollTo({ top: targetY, behavior: 'smooth' });
      this.mobileMenuOpen = false;
    }
  }
}
