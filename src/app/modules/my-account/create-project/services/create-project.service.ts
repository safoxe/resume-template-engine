import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../../types/project.type';

@Injectable({ providedIn: 'root' })
export class CreateProjectService {
  constructor(private http: HttpClient) {}

  createProject(project: Project): Observable<any> {
    return this.http.post(`${environment.endpoint}/api/projects/create`, project, {
      responseType: 'text',
    });
  }
}
