import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [{
      id: 0,
      name: "Web Portfolio",
      summary: "My web portfolio. I created it with the idea of ​​being able to share a little about myself and my projects.",
      description: "This project is a portfolio website crafted with Angular, Typescript, and Bootstrap. Facing challenges during development prompted me to deeply explore Angular and Typescript, fostering my growth as a developer. The primary goal is to transparently showcase my experience, skills, and past projects, acting as a centralized hub for those interested in my professional journey. Through this endeavor, I expanded my proficiency in Angular, Typescript, and Bootstrap, mastering the creation of dynamic interfaces and refining the user experience, ultimately solidifying my web development skills.",
      projectLink: "https://github.com/Ismael-Moreira-Kt/Portfolio",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.CSS],
      pictures: [
        "../../assets/modals/web-portfolio/Captura de ecrã de 2024-02-22 04-00-01.png",
        "../../assets/modals/web-portfolio/Captura de ecrã de 2024-02-22 04-00-43.png",
        "../../assets/modals/web-portfolio/Captura de ecrã de 2024-02-22 04-01-30.png"
      ]
    },
    {
      id: 1,
      name: "Another Project",
      summary: "Summary of another project.",
      description: "Description of another project.",
      projectLink: "https://github.com/Ismael-Moreira-Kt/AnotherProject",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.BOOTSTRAP, Tag.CSS],
      pictures: [
        "../../assets/modals/web-portfolio/Captura de ecrã de 2024-02-22 04-00-01.png",
        "../../assets/modals/web-portfolio/Captura de ecrã de 2024-02-22 04-00-43.png",
        "../../assets/modals/web-portfolio/Captura de ecrã de 2024-02-22 04-01-30.png"
      ]
    }];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectsById(id: number): Project{
    let project = this.projects.find(project => project.id === id);
    
    if (project === undefined) {
      throw new TypeError("There is no project that matches the id: " + id)
    }
    
    return project;
  }
}
