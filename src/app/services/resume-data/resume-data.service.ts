import { Injectable } from '@angular/core';
import { Resume } from 'src/app/components/scaffold-menu/types/resume-data.type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  constructor(private http: HttpClient) {}

  setResumeData(resume: Resume): void {
    this.http.post<Resume>(`${environment.endpoint}/api/scaffold/addScaffoldedData`, resume);
  }

  getResumeData(projectName: string): Observable<Resume> {
    return this.http.get<Resume>(`${environment.endpoint}/api/scaffold/getScaffoldedData`);
  }
}
