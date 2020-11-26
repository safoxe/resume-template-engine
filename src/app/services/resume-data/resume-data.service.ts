import { Injectable } from '@angular/core';
import { Resume } from 'src/app/components/scaffold-menu/types/resume-data.type';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  resumeData: Resume;

  setResumeData(resume: Resume): void {
    this.resumeData = resume;
  }

  getResumeData(): Resume {
    return this.resumeData;
  }
}
