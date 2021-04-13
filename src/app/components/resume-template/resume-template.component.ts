import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/components/base/base.component';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ControlNameValue } from '../editable-field/types/control-value.type';
import { ResumeCoverService } from '../../services/resume-cover-service/resume-cover.service';
import { TechnologiesDialogComponent } from '../technologies-dialog/technologies-dialog.component';
import { FullResumeData } from '../scaffold-menu/types/resume-data.type';
import { positions } from '../scaffold-menu/types/position.type';
import {
  Seniority,
  SeniorityName,
  seniorityTypes,
} from '../scaffold-menu/types/seniority-level.type';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.scss'],
})
export class ResumeTemplateComponent extends BaseComponent implements OnInit {
  @Input() resumeData: FullResumeData = null;

  coverPath: string = null;

  form = this.fb.group({
    positionType: this.fb.control(''),
    positionName: this.fb.control(''),
    location: this.fb.control(''),
    yearsOfExperience: this.fb.control(''),
    recruiter: this.fb.control(''),
    aboutProject: this.fb.control(''),
  });

  constructor(
    private fb: FormBuilder,
    private resumeCoverService: ResumeCoverService,
    private dialog: MatDialog,
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.resumeData) {
      this.form.get('positionType').setValue(this.resumeData.professionType);
      this.form
        .get('positionName')
        .setValue(
          `${seniorityTypes[this.resumeData.seniorityLevel]} ${this.resumeData.professionType}`,
        );
      this.form.get('aboutProject').setValue(this.resumeData.description);
      this.form.get('location').setValue(this.resumeData.location);
      this.form
        .get('yearsOfExperience')
        .setValue(
          `${this.getYearsOfExperience(seniorityTypes[this.resumeData.seniorityLevel])}+ Years`,
        );
      this.form.get('recruiter').setValue(this.resumeData.assignedTo);
    }
    this.resumeCoverService.updateResumeCoverPath
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((coverPath) => {
        this.coverPath = coverPath;
      });
  }

  updateControlValue(controlNameValue: ControlNameValue) {
    this.form.get(controlNameValue.controlName).setValue(controlNameValue.value);
  }

  openTechnologiesDialog(): void {
    this.dialog.open(TechnologiesDialogComponent);
  }

  getYearsOfExperience(seniority: SeniorityName): number {
    switch (seniority) {
      case Seniority.trainee: {
        return 0;
      }
      case Seniority.junior: {
        return 1;
      }
      case Seniority.middle: {
        return 2;
      }
      case Seniority.senior: {
        return 5;
      }
      case Seniority.lead: {
        return 6;
      }
      default: {
        return 0;
      }
    }
  }
}
