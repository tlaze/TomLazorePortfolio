import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'POS Kiosk App',
      description: 'A responsive Vue 3 application built with Vite, Tailwind CSS, and Pinia that allows customers to browse a dynamic menu, add items to their cart, and simulate payments with validation. Upon checkout, orders are submitted in real time to a kitchen dashboard via WebSocket. The app uses localStorage to persist the cart state and includes smooth page transitions, mobile-optimized layouts, and basic input validation.',
      imageUrl: 'assets/images/pos-kiosk.png',
      videoUrl: 'assets/videos/pos-demo.mp4',
      repoUrl: 'https://github.com/tlaze/pos-project'
    },
    {
      title: 'Kitchen Dashboard App',
      description: 'A Vue 3 admin dashboard styled with Tailwind CSS that receives real-time orders from the POS Kiosk app via WebSocket. Orders are stored in localStorage for persistence and organized into "pending" and "completed" views. Staff can mark items as completed, view timestamps, and send items back to the kitchen if needed. Includes an analytics tab powered by Chart.js to visualize the most frequently ordered items.',
      imageUrl: 'assets/images/kitchen-dashboard.png',
      videoUrl: 'assets/videos/kitchen-dashboard-demo.mp4',
      repoUrl: 'https://github.com/tlaze/kitchen-dashboard'
    },
    {
      title: 'Book Manager',
      description: 'A responsive, frontend-only React app built with TypeScript, Vite, and Material-UI that fetches book data from the Open Library API and stores it in memory. Users can add new books by entering an OLID, sort and view them in a dynamic card layout, and edit any book’s title, author, publication date, or description. The entire list is persisted in localStorage for seamless page reloads, and the interface includes a friendly empty state and full mobile responsiveness.',
      imageUrl: 'assets/images/book.png',
      demoUrl: 'https://book-manager-x.netlify.app/',
      repoUrl: 'https://github.com/tlaze/xtivia-book-app'
    },
    {
      title: 'Witches Village Cafe',
      description: 'A customer-facing website built with Angular for Witches Village Cafe. It features a curated menu, intuitive navigation, and a user-friendly interface optimized for performance and accessibility. The site includes location/contact info, integrated social media links, and a clean design that encourages in-person visits and community engagement.',
      imageUrl: 'assets/images/witches.png',
      demoUrl: 'https://www.witchesvillagecafe.com',
      repoUrl: 'https://github.com/tlaze/witches-cafe'
    },
    {
      title: 'Over 40 Fitness Hacks',
      description: 'A streamlined appointment booking site for fitness sessions, built with GoHighLevel and styled using CSS. Designed with an intuitive user experience, the site simplifies client scheduling and is deployed on a HostGator-registered domain to ensure speed, reliability, and performance.',
      imageUrl: 'assets/images/fitness.png',
      demoUrl: 'https://over40fitnesshacks.com/home',
      repoUrl: 'https://app.gohighlevel.com/'
    },
    {
      title: 'Three.js Audio Visualizer Orb',
      description: 'An interactive 3D audio visualizer built with React and Three.js. Features a glowing orb that dynamically reacts to music frequencies. Users can click to start music and customize the orb’s color and wireframe using a real-time GUI. Powered by Web Audio API, shaders, and postprocessing effects.',
      imageUrl: 'assets/images/orb.png',
      demoUrl: 'https://tlaze.github.io/threejs-Audio-Visualizer-Orb',
      repoUrl: 'https://github.com/tlaze/threejs-Audio-Visualizer-Orb'
    },
    {
      title: 'Power Outage Tracker',
      description: 'A Progressive Web App for reporting and monitoring power outages in real-time. Built with Angular, NestJS, Tailwind CSS, and PostgreSQL, this full-stack application allows users to submit outage reports, view active issues, and work offline. Designed for utility teams requiring 24/7 reliability and rapid response tools.',
      imageUrl: 'assets/images/PowerOutageTracker.png',
      demoUrl: 'https://poweroutageapp.netlify.app/report',
      repoUrl: 'https://github.com/tlaze/power-outage-tracker'
    },
    {
      title: 'Weather App',
      description: 'Weather app using the OpenWeather API to display daily, hourly, and weekly forecasts. Users can sign up to access search history and save favorite locations. Combines real-time weather data with a personalized experience.',
      imageUrl: 'assets/images/weatherapp.png',
      videoUrl: 'assets/videos/weather-demo.mp4',
      repoUrl: 'https://github.com/tlaze/weather-channel-program?tab=readme-ov-file'
    },
    {
      title: 'Tech Blog',
      description: 'A full-stack CMS-style blog site where developers can publish articles, edit posts, and engage with comments. Built with Node.js, Express, Handlebars, and Sequelize using a MySQL database. Features user authentication, post management, and dynamic content rendering.',
      imageUrl: 'assets/images/tech-blog-pic.png',
      demoUrl: 'https://toms-tech-blog-e89407441940.herokuapp.com/',
      repoUrl: 'https://github.com/tlaze/tech-blog'
    },
  ];
}
