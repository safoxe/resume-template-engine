import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../../types/project.type';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.endpoint}/api/projects/getAll`);
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${environment.endpoint}/api/projects/get?id=${id}`);
  }
}
