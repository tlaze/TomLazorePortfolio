import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    const nav = document.querySelector('nav');

    if (section && nav) {
      const navHeight = nav.clientHeight;
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }
}
