import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../../types/project.type';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private projectsService: ProjectsService,
  ) {}

  projects: Project[] = [];

  async ngOnInit(): Promise<void> {
    this.projects = await this.projectsService.getProjects().toPromise();
  }

  openProject(projectId: string): void {
    this.router.navigateByUrl(`/my-account/project?id=${projectId}`);
  }
}
