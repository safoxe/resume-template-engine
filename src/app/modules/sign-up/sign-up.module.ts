import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';

@NgModule({
  declarations: [SignUpComponent, InfoPanelComponent],
  imports: [CommonModule, SignUpRoutingModule, ReactiveFormsModule, FormsModule],
})
export class SignUpModule {}
