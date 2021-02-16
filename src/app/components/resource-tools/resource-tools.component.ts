import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-resource-tools',
  templateUrl: './resource-tools.component.html',
  styleUrls: ['./resource-tools.component.css'],
})
export class ResourceToolsComponent implements OnInit {
  coverAccordionOpen = false;

  @Output() updateCover: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  toggleCoversAccordion(): void {
    this.coverAccordionOpen = !this.coverAccordionOpen;
  }

  selectCover(): void {
    this.updateCover.emit('/assets/logo.png');
  }
}
