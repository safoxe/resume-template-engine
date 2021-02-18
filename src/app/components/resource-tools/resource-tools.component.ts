import { Component, OnInit } from '@angular/core';
import { ResumeCoverService } from 'src/app/services/resume-cover-service/resume-cover.service';

@Component({
  selector: 'app-resource-tools',
  templateUrl: './resource-tools.component.html',
  styleUrls: ['./resource-tools.component.css'],
})
export class ResourceToolsComponent implements OnInit {
  coverAccordionOpen = false;

  constructor(private resumeCoverService: ResumeCoverService) {}

  ngOnInit(): void {}

  toggleCoversAccordion(): void {
    this.coverAccordionOpen = !this.coverAccordionOpen;
  }

  selectCover(coverPath: string): void {
    this.resumeCoverService.updateResumeCoverPath.next(coverPath);
  }
}
