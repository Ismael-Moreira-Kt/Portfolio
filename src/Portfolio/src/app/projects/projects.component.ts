import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [ProjectCardComponent]
})
export class ProjectsComponent {

  portfolio: Project = {
    id: 0,
    name: "Web Portfolio",
    summary: "My web portfolio. I created it with the idea of ​​being able to share a little about myself and my projects.",
    description: "This project is a portfolio website crafted with Angular, Typescript, and Bootstrap. Facing challenges during development prompted me to deeply explore Angular and Typescript, fostering my growth as a developer. The primary goal is to transparently showcase my experience, skills, and past projects, acting as a centralized hub for those interested in my professional journey. Through this endeavor, I expanded my proficiency in Angular, Typescript, and Bootstrap, mastering the creation of dynamic interfaces and refining the user experience, ultimately solidifying my web development skills.",
    projectLink: "https://github.com/Ismael-Moreira-Kt/Portfolio",
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.CSS],
    pictures: []
  };

  constructor(private titleService: Title){
    this.titleService.setTitle('Ismael Moreira - Projects')
  }
}
