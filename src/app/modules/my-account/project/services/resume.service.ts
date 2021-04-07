import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resume } from '../../types/resume.type';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  constructor(private http: HttpClient) {}

  createResume(resume: Resume): Observable<unknown> {
    return this.http.post<Resume>(`${environment.endpoint}/api/resumes/create`, resume);
  }
}
