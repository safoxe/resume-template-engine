import { Directive, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { WINDOW_OBJ } from 'src/app/services/window/window.service';

@Directive({
  selector: '[appEqualWidth]',
})
export class EqualWidthDirective implements OnInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(WINDOW_OBJ) private window: Window,
  ) {}

  ngOnInit(): void {}

  @HostListener('window:resize')
  onWindowResize(): void {
    const width = this.window.innerWidth / 2;
    this.renderer.setStyle(this.el.nativeElement, 'width', width);
  }
}
