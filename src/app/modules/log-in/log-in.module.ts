import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  declarations: [LogInComponent],
  imports: [CommonModule, LogInRoutingModule, ReactiveFormsModule, FormsModule],
})
export class LogInModule {}
