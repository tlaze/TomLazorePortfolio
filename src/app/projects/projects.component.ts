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
      demoUrl: '',
      repoUrl: 'https://github.com/tlaze/weather-channel-program?tab=readme-ov-file'
    },
  ];
}
