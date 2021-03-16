import { Component, Inject, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { WINDOW_OBJ } from 'src/app/services/window/window.service';

@Component({
  selector: 'app-resizable-element',
  templateUrl: './resizable-element.component.html',
  styleUrls: ['./resizable-element.component.scss'],
})
export abstract class ResizableElementComponent implements OnInit {
  constructor(@Inject(WINDOW_OBJ) public window: Window) {}

  ngOnInit(): void {}

  style: {};

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`,
    };
  }

  onResizeValidate(event: ResizeEvent): boolean {
    const maxWidth = window.innerWidth / 2;
    return !(event.rectangle.width > maxWidth);
  }
}
