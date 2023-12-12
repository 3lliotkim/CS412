// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mockData } from './mock-data'; // Import the mock data

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class AppComponent {
  data = mockData; // Data received from the backend
  title = 'angular-app';

  // Simulate fetching data from the PS4 backend
  fetchData() {
    // Replace the following URL with your PS4 backend endpoint
    const ps4BackendEndpoint = 'http://localhost:3000/';

    // Simulate a fetch operation (replace with actual HTTP request)
    fetch(ps4BackendEndpoint)
      .then(response => response.json())
      .then(data => {
        this.data = data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
