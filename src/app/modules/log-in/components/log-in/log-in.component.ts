import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { GoogleAuthService } from 'src/app/services/google-auth/google-auth.service';
import { BaseComponent } from 'src/app/components/base/base.component';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent extends BaseComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private spinner: SpinnerService,
    private googleAuthService: GoogleAuthService,
    private authService: AuthService,
  ) {
    super();
  }

  ngOnInit(): void {}

  logInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  async logIn(): Promise<void> {
    const spinner = this.spinner.show();
    await this.authService
      .logIn(this.logInForm.get('email').value, this.logInForm.get('password').value)
      .then(() => {
        this.router.navigate(['/my-account']);
        spinner.hide();
      })
      .catch((err) => {
        spinner.hide();
      });
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

  redirectToMyAccount(): void {
    this.router.navigate(['/my-account']);
  }
}
