import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  constructor(private fb: FormBuilder) {}

  logInForm = this.fb.group({
    email: this.fb.control('gfh', [Validators.required]),
    password: this.fb.control('gdfg', [Validators.required]),
  });

  logIn(): void {
    console.log(this.logInForm);
  }
}
