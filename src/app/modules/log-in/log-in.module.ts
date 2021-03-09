import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [LogInComponent, SignUpComponent],
  imports: [CommonModule, LogInRoutingModule],
})
export class LogInModule {}
