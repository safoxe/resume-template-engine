import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private fb: FormBuilder) {}

  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    userName: ['', [Validators.required]],
  });

  signUp(): void {
    // eslint-disable-next-line no-console
    console.log(this.signUpForm);
  }
}
