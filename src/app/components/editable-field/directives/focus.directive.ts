import { Directive, ElementRef, AfterViewInit } from '@angular/core';
@Directive({
  selector: '[focus]',
})
export class FocusDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }
}
