import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuthService } from 'src/app/services/google-auth/google-auth.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { SignUpService } from './services/sign-up.service';
import { User } from './types/user.type';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(
    private fb: FormBuilder,
    private spinner: SpinnerService,
    private router: Router,
    private googleAuthService: GoogleAuthService,
    private signUpService: SignUpService,
  ) {}

  isUserRegistered = false;

  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    userName: ['', [Validators.required]],
  });

  async signUp(): Promise<void> {
    const spinner = this.spinner.show();
    const user = {
      email: this.signUpForm.get('email').value,
      userName: this.signUpForm.get('userName').value,
      password: this.signUpForm.get('password').value,
    } as User;
    await this.signUpService.signUpUser(user).toPromise();
    this.isUserRegistered = true;
    spinner.hide();
  }

  async signInWithGoogle(): Promise<void> {
    const spinner = this.spinner.show();
    await this.googleAuthService.authenticateUser().then((user) => {
      if (user) {
        this.router.navigate(['/my-account']);
      }
    });
    spinner.hide();
  }
}
