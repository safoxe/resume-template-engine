import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-tools',
  templateUrl: './resource-tools.component.html',
  styleUrls: ['./resource-tools.component.css'],
})
export class ResourceToolsComponent implements OnInit {
  coverAccordionOpen = false;

  ngOnInit(): void {}

  toggleCoversAccordion(): void {
    this.coverAccordionOpen = !this.coverAccordionOpen;
  }
}
