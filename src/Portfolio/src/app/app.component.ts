import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, NavComponent]
})
export class AppComponent {
  title = 'Portfolio';
}
