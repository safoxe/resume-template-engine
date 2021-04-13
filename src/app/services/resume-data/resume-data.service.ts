import { Injectable } from '@angular/core';
import { FullResumeData } from 'src/app/components/scaffold-menu/types/resume-data.type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resume } from 'src/app/modules/my-account/types/resume.type';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  constructor(private http: HttpClient) {}

  setResumeData(resume: Resume): Observable<any> {
    return this.http.post(
      `${environment.endpoint}/api/scaffold/addScaffoldedData`,
      {
        PositionType: resume.professionType,
        SeniorityLevel: resume.seniorityLevel,
      },
      {
        responseType: 'text',
      },
    );
  }

  getResumeData(resumeId: string): Observable<FullResumeData> {
    return this.http.get<FullResumeData>(
      `${environment.endpoint}/api/resumes/getFullResumeInfo?id=${resumeId}`,
    );
  }
}
