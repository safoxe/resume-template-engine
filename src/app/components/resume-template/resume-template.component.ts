import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/components/base/base.component';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ControlNameValue } from '../editable-field/types/control-value.type';
import { ResumeCoverService } from '../../services/resume-cover-service/resume-cover.service';
import { TechnologiesDialogComponent } from '../technologies-dialog/technologies-dialog.component';
import { GeneratedResumeData, Resume } from '../scaffold-menu/types/resume-data.type';
import { positions } from '../scaffold-menu/types/position.type';
import { seniorityTypes } from '../scaffold-menu/types/seniority-level.type';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css'],
})
export class ResumeTemplateComponent extends BaseComponent implements OnInit {
  @Input() resumeData: GeneratedResumeData = null;

  coverPath: string = null;

  form = this.fb.group({
    positionType: this.fb.control(''),
    positionName: this.fb.control(''),
    location: this.fb.control('Location - ADD'),
    yearsOfExperience: this.fb.control('5+ to be calculated'),
    recruiter: this.fb.control('Responsible Recruiter - ADD'),
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
      this.form.get('positionType').setValue(positions[this.resumeData.positionType]);
      this.form
        .get('positionName')
        .setValue(
          `${seniorityTypes[this.resumeData.seniorityLevel]} ${
            positions[this.resumeData.positionType]
          }`,
        );
      this.form.get('aboutProject').setValue(this.resumeData.description);
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
}
