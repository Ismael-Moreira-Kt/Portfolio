import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.css'
})
export class StudiesComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Ismael Moreira - Studies')
  }
}
