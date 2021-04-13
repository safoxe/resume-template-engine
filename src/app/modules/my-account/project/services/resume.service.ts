import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resume } from '../../types/resume.type';
import { ProjectsService } from '../../my-projects/services/projects.service';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  constructor(private http: HttpClient, private projectService: ProjectsService) {}

  resumes: BehaviorSubject<Resume[]> = new BehaviorSubject<Resume[]>(null);

  async createResume(resume: Resume): Promise<void> {
    const id = await this.http
      .post(`${environment.endpoint}/api/resumes/create`, resume, {
        responseType: 'text',
      })
      .toPromise();
    // eslint-disable-next-line no-param-reassign
    resume.id = id;
    const currentVal = this.resumes.value;
    this.resumes.next([...currentVal, resume]);
  }

  addResumeCategory(categoryName: string): Observable<unknown> {
    return this.http.post<string>(`${environment.endpoint}/api/resumes/create`, categoryName);
  }

  async getAllResumesForProject(id: string): Promise<Resume[]> {
    const resumes = await this.http
      .get<Resume[]>(`${environment.endpoint}/api/resumes/get?id=${id}`)
      .toPromise();

    this.resumes.next(resumes);

    return resumes;
  }
}
