import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResumeService } from 'src/app/modules/my-account/project/services/resume.service';
import {
  SeniorityId,
  seniorityIds,
  SeniorityName,
  seniorityTypes,
} from 'src/app/components/scaffold-menu/types/seniority-level.type';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/modules/my-account/my-projects/services/projects.service';
import { Resume } from 'src/app/modules/my-account/types/resume.type';

@Component({
  selector: 'app-add-resume-dialog',
  templateUrl: './add-resume-dialog.component.html',
  styleUrls: ['./add-resume-dialog.component.scss'],
})
export class AddResumeDialogComponent implements OnInit {
  resumeForm = this.formBuilder.group({
    seniorityLevel: ['', Validators.required],
  });

  constructor(
    private dialogRef: MatDialogRef<AddResumeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { profession: string },
    private resumeService: ResumeService,
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService,
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  async addJobDescription(): Promise<void> {
    const resume: Resume = {
      projectId: this.projectsService.currentProject.id,
      professionType: this.data.profession,
      seniorityLevel: this.resumeForm.get('seniorityLevel').value,
    };
    await this.resumeService.createResume(resume);
    this.close();
  }

  getSeniorityIds(): SeniorityId[] {
    return seniorityIds;
  }

  getSeniorityName(seniorityId: SeniorityId): SeniorityName {
    return seniorityTypes[seniorityId];
  }
}
