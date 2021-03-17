import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss'],
})
export class ProjectDescriptionComponent implements OnInit {
  projects: string[] = [
    'Project',
    'Project',
    'Project',
    'Project',
    'Project',
    'Project',
    'Project',
    'Project',
    'Project',
  ];

  projectTechnologies = ['#python', 'cpp', 'c-sharp', 'mysql'];

  ngOnInit(): void {}
}
