import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';
import { WINDOW_OBJ } from 'src/app/services/window/window.service';
import { ResizableElementComponent } from '../shared/resizable-element/resizable-element.component';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
})
export class MyProjectsComponent extends ResizableElementComponent implements OnInit {
  constructor(private projectsService: ProjectsService, @Inject(WINDOW_OBJ) public window: Window) {
    super(window);
  }

  async ngOnInit(): Promise<void> {
    await this.projectsService.getProjects();
  }
}
