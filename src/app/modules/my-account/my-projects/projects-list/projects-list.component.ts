import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from 'src/app/components/base/base.component';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../../types/project.type';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent extends BaseComponent implements OnInit {
  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private projectsService: ProjectsService,
  ) {
    super();
  }

  projects: Project[] = [];

  async ngOnInit(): Promise<void> {
    await this.projectsService.getProjects();
    this.projectsService.projects.pipe(takeUntil(this.unsubscribe$)).subscribe((projects) => {
      this.projects = projects;
    });
  }

  openProject(projectId: string): void {
    this.router.navigateByUrl(`/my-account/project?id=${projectId}`);
  }
}
