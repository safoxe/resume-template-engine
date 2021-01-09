import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResumeDataService } from 'src/app/services/resume-data/resume-data.service';
import { Resume } from '../scaffold-menu/types/resume-data.type';

@Component({
  selector: 'app-template-engine',
  templateUrl: './template-engine.component.html',
  styleUrls: ['./template-engine.component.css'],
})
export class TemplateEngineComponent implements OnInit {
  resumeData: Resume;

  projectId: string;

  constructor(
    private resumeDataService: ResumeDataService,
    private activatedRoute: ActivatedRoute,
  ) {}

  async ngOnInit(): Promise<void> {
    this.projectId = this.activatedRoute.snapshot.queryParamMap.get('projectId');
    this.resumeData = await this.resumeDataService.getResumeData(this.projectId).toPromise();
  }
}
