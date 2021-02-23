import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoverImageDialogComponent } from '../cover-image-dialog/cover-image-dialog.component';

@Component({
  selector: 'app-resource-tools',
  templateUrl: './resource-tools.component.html',
  styleUrls: ['./resource-tools.component.css'],
})
export class ResourceToolsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openCoverImagePopUp(): void {
    this.dialog.open(CoverImageDialogComponent, { panelClass: 'custom-dialog-container' });
  }
}
