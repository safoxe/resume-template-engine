import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from 'src/app/components/base/base.component';
import { takeUntil } from 'rxjs/operators';
import { ControlNameValue } from '../editable-field/types/control-value.type';
import { ResumeCoverService } from '../../services/resume-cover-service/resume-cover.service';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css'],
})
export class ResumeTemplateComponent extends BaseComponent implements OnInit {
  coverPath: string = null;

  form = this.fb.group({
    positionType: this.fb.control('Position Type'),
    positionName: this.fb.control('Test Position Name'),
    location: this.fb.control('Location'),
    yearsOfExperience: this.fb.control('5+'),
    recruiter: this.fb.control('Responsible Recruiter'),
    aboutProject: this.fb.control(
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
       nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
       deserunt mollit anim id est laborum.`,
    ),
  });

  constructor(private fb: FormBuilder, private resumeCoverService: ResumeCoverService) {
    super();
  }

  ngOnInit(): void {
    this.resumeCoverService.updateResumeCoverPath
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((coverPath) => {
        this.coverPath = coverPath;
      });
  }

  updateControlValue(controlNameValue: ControlNameValue) {
    this.form.get(controlNameValue.controlName).setValue(controlNameValue.value);
  }
}
