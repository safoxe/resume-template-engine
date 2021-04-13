/* eslint-disable global-require */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-technologies-dialog',
  templateUrl: './technologies-dialog.component.html',
  styleUrls: ['./technologies-dialog.component.scss'],
})
export class TechnologiesDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<TechnologiesDialogComponent>) {}

  searchVal: string = null;

  imageRef: string = null;

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }
}
