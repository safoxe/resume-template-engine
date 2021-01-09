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

  setResumeData(resume: Resume): Observable<any> {
    return this.http.post(
      `${environment.endpoint}/api/scaffold/addScaffoldedData`,
      {
        Name: resume.name,
        Domain: resume.domain,
        PositionType: resume.positionType,
        SeniorityLevel: resume.seniorityLevel,
      },
      {
        responseType: 'text',
      },
    );
  }

  getResumeData(projectId: string): Observable<Resume> {
    return this.http.get<Resume>(
      `${environment.endpoint}/api/scaffold/getScaffoldedData/${projectId}`,
    );
  }
}
