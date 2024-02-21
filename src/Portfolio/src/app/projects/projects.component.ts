import { Component, OnInit, SimpleChange } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [
      ProjectCardComponent,
      CommonModule
    ]
})
export class ProjectsComponent implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Ismael Moreira - Projects')
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
