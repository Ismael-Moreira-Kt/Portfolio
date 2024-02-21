import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
  navigateToStudies() {
    this.router.navigate(['/studies']);
  }
  navigateToContacts() {
    this.router.navigate(['/contacts']);
  }
}
