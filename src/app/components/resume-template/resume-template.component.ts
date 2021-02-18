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
  coverPath: string;

  form = this.fb.group({
    positionName: this.fb.control('Test Position Name'),
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
