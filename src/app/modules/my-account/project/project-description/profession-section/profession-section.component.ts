import { Component, Input, OnInit } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up-service/pop-up.service';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { AddResumeDialogComponent } from './add-resume-dialog/add-resume-dialog.component';

@Component({
  selector: 'app-profession-section',
  templateUrl: './profession-section.component.html',
  styleUrls: ['./profession-section.component.scss'],
})
export class ProfessionSectionComponent implements OnInit {
  constructor(private popUpService: PopUpService, private dialog: MatDialog) {}

  @Input() professionType: string;

  @Input() resumes: string[];

  ngOnInit(): void {}

  openJobDescription(): void {
    this.popUpService.openPageAsPopup(environment.siteUrl, '6033f040a907ce87785b8250');
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
