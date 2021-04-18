/* eslint-disable global-require */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProjectsService } from 'src/app/modules/my-account/my-projects/services/projects.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-technologies-dialog',
  templateUrl: './technologies-dialog.component.html',
  styleUrls: ['./technologies-dialog.component.scss'],
})
export class TechnologiesDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TechnologiesDialogComponent>,
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder,
  ) {}

  imageNameForm: FormControl = null;

  searchVal: string = null;

  imageRef: string = null;

  showImg: boolean = true;

  ngOnInit(): void {
    this.imageNameForm = this.formBuilder.control('');
    this.imageNameForm.valueChanges.subscribe(() => {
      this.showImg = true;
      this.searchVal = this.imageNameForm.value;
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  async addTechnology(tech: string): Promise<void> {
    await this.projectsService.updateUsedTechnologies(tech);
  }

  getImageUrl(): string {
    this.showImg = true;
    this.imageRef = `${environment.endpoint}/images/${this.searchVal}.png`;
    return this.imageRef;
  }

  onError(): void {
    this.showImg = false;
    this.imageRef = null;
  }
}
