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
    const container = document.getElementById('scrollContainer');
    const section   = document.getElementById(sectionId);
    const nav       = document.querySelector('nav');
    if (container && section && nav) {
      const navHeight = nav.clientHeight;
      // section.offsetTop is relative to the container’s top if container is the offsetParent
      const targetY = section.offsetTop - navHeight;
      container.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }

}
