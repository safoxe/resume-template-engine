import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../../types/project.type';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private http: HttpClient) {}

  currentProject: Project = null;

  projects: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>(null);

  async getProjects(): Promise<Project[]> {
    const projects = await this.http
      .get<Project[]>(`${environment.endpoint}/api/projects/getAll`)
      .toPromise();
    this.projects.next(projects);
    return projects;
  }

  async getProject(id: string): Promise<Project> {
    this.currentProject = await this.http
      .get<Project>(`${environment.endpoint}/api/projects/get?id=${id}`)
      .toPromise();
    return this.currentProject;
  }

  async createProject(project: Project): Promise<string> {
    const projectsId = await this.http
      .post(`${environment.endpoint}/api/projects/create`, project, {
        responseType: 'text',
      })
      .toPromise();

    // eslint-disable-next-line no-param-reassign
    project.id = projectsId;

    const currentVal = this.projects.value;
    this.projects.next([...currentVal, project]);
    return projectsId;
  }

  async updateUsedTechnologies(tech: string): Promise<void> {
    if (this.currentProject.usedTechnologies === null) {
      this.currentProject.usedTechnologies = [];
    }
    this.currentProject.usedTechnologies.push(tech);
  }
}
