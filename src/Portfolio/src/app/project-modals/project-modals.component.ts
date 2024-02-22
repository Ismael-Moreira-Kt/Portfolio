import { CommonModule } from '@angular/common';
import { Component, RendererFactory2 } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modals',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  providers: [],
  templateUrl: './project-modals.component.html',
  styleUrl: './project-modals.component.css'
})
export class ProjectModalsComponent {
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) {

  }
}