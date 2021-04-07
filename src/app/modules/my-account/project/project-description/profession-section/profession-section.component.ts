import { Component, Input, OnInit } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up-service/pop-up.service';
import { environment } from 'src/environments/environment';
import { ResumeService } from 'src/app/modules/my-account/project/services/resume.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profession-section',
  templateUrl: './profession-section.component.html',
  styleUrls: ['./profession-section.component.scss'],
})
export class ProfessionSectionComponent implements OnInit {
  constructor(
    private popUpService: PopUpService,
    private resumeService: ResumeService,
    private dialog: MatDialog,
  ) {}

  @Input() professionType: string;

  @Input() resumes: string[];

  ngOnInit(): void {}

  openJobDescription(): void {
    this.popUpService.openPageAsPopup(environment.siteUrl, '6033f040a907ce87785b8250');
  }

  async addJobDescription(): Promise<void> {
    const resume = { professionType: this.professionType };
    await this.resumeService.createResume(resume).toPromise();
  }
}
