import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { WINDOW_OBJ } from 'src/app/services/window/window.service';
import { ProjectsService } from '../my-projects/services/projects.service';
import { ResizableElementComponent } from '../shared/resizable-element/resizable-element.component';
import { Project } from '../types/project.type';
import { Resume } from '../types/resume.type';
import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent extends ResizableElementComponent implements OnInit {
  constructor(
    @Inject(WINDOW_OBJ) public window: Window,
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService,
    private resumeService: ResumeService,
  ) {
    super(window);
  }

  projectId: string = null;

  project: Project = null;

  resumes: Resume[] = null;

  async ngOnInit(): Promise<void> {
    this.activatedRoute.queryParams.subscribe(async (params) => {
      this.projectId = params.id;
      this.project = await this.projectsService.getProject(this.projectId);
      this.resumes = await this.resumeService.getAllResumesForProject(this.projectId);
    });
  }
}
