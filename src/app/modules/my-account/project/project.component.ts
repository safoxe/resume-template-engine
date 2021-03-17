import { Component, Inject, OnInit } from '@angular/core';
import { WINDOW_OBJ } from 'src/app/services/window/window.service';
import { ResizableElementComponent } from '../shared/resizable-element/resizable-element.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent extends ResizableElementComponent implements OnInit {
  constructor(@Inject(WINDOW_OBJ) public window: Window) {
    super(window);
  }

  ngOnInit(): void {}
}
