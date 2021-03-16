import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-controls',
  templateUrl: './account-controls.component.html',
  styleUrls: ['./account-controls.component.scss'],
})
export class AccountControlsComponent implements OnInit {
  accountName = 'Account Name';

  ngOnInit(): void {}
}
