import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from 'src/app/services/resume-data/resume-data.service';
import { Resume } from '../scaffold-menu/types/resume-data.type';

@Component({
  selector: 'app-template-engine',
  templateUrl: './template-engine.component.html',
  styleUrls: ['./template-engine.component.css'],
})
export class TemplateEngineComponent implements OnInit {
  resumeData: Resume;

  projectName: string;

  constructor(private resumeDataService: ResumeDataService) {}

  async ngOnInit(): Promise<void> {
    this.resumeData = await this.resumeDataService.getResumeData(this.projectName).toPromise();
  }
}
