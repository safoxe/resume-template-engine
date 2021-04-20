import { Component, Input, OnInit } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up-service/pop-up.service';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { Seniority } from 'src/app/components/scaffold-menu/types/seniority-level.type';
import { AddResumeDialogComponent } from './add-resume-dialog/add-resume-dialog.component';
import { Resume } from '../../../types/resume.type';

@Component({
  selector: 'app-profession-section',
  templateUrl: './profession-section.component.html',
  styleUrls: ['./profession-section.component.scss'],
})
export class ProfessionSectionComponent implements OnInit {
  constructor(private popUpService: PopUpService, private dialog: MatDialog) {}

  @Input() professionType: string;

  @Input() resumes: Resume[];

  ngOnInit(): void {}

  openJobDescription(resumeId: string): void {
    this.popUpService.openPageAsPopup(environment.siteUrl, resumeId);
  }

  getProfessionTypeLetter(profType: string): string {
    switch (profType) {
      case Seniority.junior.toLocaleLowerCase():
        return 'J';
      case Seniority.middle.toLocaleLowerCase():
        return 'M';
      case Seniority.senior.toLocaleLowerCase():
        return 'S';
      case Seniority.trainee.toLocaleLowerCase():
        return 'T';
      case Seniority.lead.toLocaleLowerCase():
        return 'L';
      default:
        return '-';
    }
  }

  openCreateResumePopUp(): void {
    this.dialog.open(AddResumeDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        profession: this.professionType,
      },
    });
  }
}
