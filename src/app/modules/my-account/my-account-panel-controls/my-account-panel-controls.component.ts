import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-my-account-panel-controls',
  templateUrl: './my-account-panel-controls.component.html',
  styleUrls: ['./my-account-panel-controls.component.scss'],
})
export class MyAccountPanelControlsComponent implements OnInit {
  constructor(private router: Router, private spinner: SpinnerService) {}

  ngOnInit(): void {}

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }

  async logOut(): Promise<void> {
    const spinner = this.spinner.show();

    await this.router.navigate(['/']);

    spinner.hide();
  }
}
