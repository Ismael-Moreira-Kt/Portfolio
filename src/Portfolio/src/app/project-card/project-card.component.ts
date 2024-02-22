import { Component, Input, RendererFactory2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { Project } from '../_models/Project';
import { ProjectModalsComponent } from '../project-modals/project-modals.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  providers: [BsModalService],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})

export class ProjectCardComponent {
  @Input() project = {} as Project;

  bsModalRef?: BsModalRef;

  constructor (private modalService: BsModalService) {

  }

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project 
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalsComponent, modalOptions);
  }
}