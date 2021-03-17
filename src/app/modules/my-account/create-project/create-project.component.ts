import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WINDOW_OBJ } from 'src/app/services/window/window.service';
import { ResizableElementComponent } from '../shared/resizable-element/resizable-element.component';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent extends ResizableElementComponent implements OnInit {
  constructor(private router: Router, @Inject(WINDOW_OBJ) public window: Window) {
    super(window);
  }

  ngOnInit(): void {}
}
