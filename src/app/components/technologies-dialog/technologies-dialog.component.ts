/* eslint-disable global-require */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectsService } from 'src/app/modules/my-account/my-projects/services/projects.service';

@Component({
  selector: 'app-technologies-dialog',
  templateUrl: './technologies-dialog.component.html',
  styleUrls: ['./technologies-dialog.component.scss'],
})
export class TechnologiesDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TechnologiesDialogComponent>,
    private projectsService: ProjectsService,
  ) {}

  searchVal: string = null;

  imageRef: string = null;

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  async addTechnology(tech: string): Promise<void> {
    await this.projectsService.updateUsedTechnologies(tech);
  }
}
