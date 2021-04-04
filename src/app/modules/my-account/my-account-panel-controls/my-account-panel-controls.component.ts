import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/components/base/base.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GoogleAuthService } from 'src/app/services/google-auth/google-auth.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-my-account-panel-controls',
  templateUrl: './my-account-panel-controls.component.html',
  styleUrls: ['./my-account-panel-controls.component.scss'],
})
export class MyAccountPanelControlsComponent extends BaseComponent implements OnInit {
  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private authService: AuthService,
  ) {
    super();
  }

  ngOnInit(): void {}

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }

  async logOut(): Promise<void> {
    const spinner = this.spinner.show();
    // await this.googleAuthService.logOut().then(() => {
    //   this.router.navigate(['/']);
    // });
    await this.authService.logout();
    this.router.navigate(['/']);
    spinner.hide();
  }
}
