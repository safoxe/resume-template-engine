import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  constructor(private router: Router, private spinner: SpinnerService) {}

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

  ngOnInit(): void {}

  async openProject(): Promise<void> {
    const spinner = this.spinner.show();

    await this.router.navigate(['/my-account/project']);

    spinner.hide();
  }
}
