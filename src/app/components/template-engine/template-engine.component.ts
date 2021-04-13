import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResumeDataService } from 'src/app/services/resume-data/resume-data.service';
import { FullResumeData } from '../scaffold-menu/types/resume-data.type';

@Component({
  selector: 'app-template-engine',
  templateUrl: './template-engine.component.html',
  styleUrls: ['./template-engine.component.scss'],
})
export class TemplateEngineComponent implements OnInit {
  resumeData: FullResumeData;

  resumeId: string;

  constructor(
    private resumeDataService: ResumeDataService,
    private activatedRoute: ActivatedRoute,
  ) {}

  async ngOnInit(): Promise<void> {
    this.resumeId = this.activatedRoute.snapshot.queryParamMap.get('resumeId');
    this.resumeData = await this.resumeDataService.getResumeData(this.resumeId).toPromise();
  }
}
