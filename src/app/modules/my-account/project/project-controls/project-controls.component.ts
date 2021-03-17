import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-controls',
  templateUrl: './project-controls.component.html',
  styleUrls: ['./project-controls.component.scss'],
})
export class ProjectControlsComponent implements OnInit {
  projectName = 'Project Name';

  ngOnInit(): void {}
}
