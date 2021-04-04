import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../types/project.type';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss'],
})
export class ProjectDescriptionComponent implements OnInit {
  @Input() project: Project;

  ngOnInit(): void {}
}
