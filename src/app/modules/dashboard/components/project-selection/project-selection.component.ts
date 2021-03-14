import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-selection',
  templateUrl: './project-selection.component.html',
  styleUrls: ['./project-selection.component.scss'],
})
export class ProjectSelectionComponent implements OnInit {
  projects: string[] = ['Project', 'Project', 'Project', 'Project'];

  ngOnInit(): void {}
}
