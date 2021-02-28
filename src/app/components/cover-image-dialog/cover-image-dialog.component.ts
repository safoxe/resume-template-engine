import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ResumeCoverService } from 'src/app/services/resume-cover-service/resume-cover.service';
import { images } from './data/images-paths';

@Component({
  selector: 'app-cover-image-dialog',
  templateUrl: './cover-image-dialog.component.html',
  styleUrls: ['./cover-image-dialog.component.scss'],
})
export class CoverImageDialogComponent implements OnInit {
  imagePaths: readonly string[] = images;

  constructor(
    private dialogRef: MatDialogRef<CoverImageDialogComponent>,
    private resumeCoverService: ResumeCoverService,
  ) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }

  selectCover(coverPath: string): void {
    this.resumeCoverService.updateResumeCoverPath.next(coverPath);
  }
}
