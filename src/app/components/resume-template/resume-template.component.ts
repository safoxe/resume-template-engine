import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ControlNameValue } from '../editable-field/types/control-value.type';

@Component({
  selector: 'app-resume-template',
  templateUrl: './resume-template.component.html',
  styleUrls: ['./resume-template.component.css'],
})
export class ResumeTemplateComponent implements OnInit {
  @Input() coverPath: string;

  form = this.fb.group({
    positionName: this.fb.control('Test Position Name'),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  updateControlValue(controlNameValue: ControlNameValue) {
    this.form.get(controlNameValue.controlName).setValue(controlNameValue.value);
  }
}
