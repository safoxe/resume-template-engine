import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyAccountPanelInfoComponent } from './my-account-panel-info/my-account-panel-info.component';
import { MyAccountPanelControlsComponent } from './my-account-panel-controls/my-account-panel-controls.component';

@NgModule({
  declarations: [MyAccountComponent, MyAccountPanelInfoComponent, MyAccountPanelControlsComponent],
  imports: [CommonModule, MyAccountRoutingModule],
})
export class MyAccountModule {}
