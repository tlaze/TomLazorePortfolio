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
    this.mobileMenuOpen = false;

    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
