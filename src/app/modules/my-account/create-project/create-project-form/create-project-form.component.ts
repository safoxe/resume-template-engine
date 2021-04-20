import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { Router } from '@angular/router';
import { Project } from '../../types/project.type';
import { ProjectsService } from '../../my-projects/services/projects.service';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss'],
})
export class CreateProjectFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private createProjectService: ProjectsService,
    private spinnerService: SpinnerService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  projectForm = this.fb.group({
    name: ['', [Validators.required]],
    location: ['', [Validators.required]],
    recruiter: [''],
    description: [''],
  });

  async save(): Promise<void> {
    const project = {
      name: this.projectForm.get('name').value,
      description: this.projectForm.get('description').value,
      assignedTo: this.projectForm.get('recruiter').value,
      location: this.projectForm.get('location').value,
    } as Project;

    const spinner = this.spinnerService.show();
    const projectId = await this.createProjectService.createProject(project);
    spinner.hide();
    this.router.navigate(['/my-account/project'], { queryParams: { id: projectId } });
  }
}
