import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuthService } from 'src/app/services/google-auth/google-auth.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

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
  ) {}

  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    userName: ['', [Validators.required]],
  });

  signUp(): void {
    // eslint-disable-next-line no-console
    console.log(this.signUpForm);
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
