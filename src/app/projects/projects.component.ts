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
      title: 'Tech Blog',
      description: 'A full-stack CMS-style blog site where developers can publish articles, edit posts, and engage with comments. Built with Node.js, Express, Handlebars, and Sequelize using a MySQL database. Features user authentication, post management, and dynamic content rendering.',
      imageUrl: 'assets/images/tech-blog-pic.png',
      demoUrl: 'https://toms-tech-blog-e89407441940.herokuapp.com/',
      repoUrl: 'https://github.com/tlaze/tech-blog'
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
      demoUrl: 'https://tlaze.github.io/weather-dashboard/',
      repoUrl: 'https://github.com/tlaze/weather-channel-program?tab=readme-ov-file'
    },
  ];
}
