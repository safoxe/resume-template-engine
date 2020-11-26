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

  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit(): void {
    this.resumeData = this.resumeDataService.getResumeData();
  }
}
