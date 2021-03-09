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
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    userName: this.fb.control('', [Validators.required]),
  });

  signUp(): void {
    console.log(this.signUpForm);
  }
}
