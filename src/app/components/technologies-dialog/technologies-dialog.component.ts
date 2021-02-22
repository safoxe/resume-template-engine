import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-technologies-dialog',
  templateUrl: './technologies-dialog.component.html',
  styleUrls: ['./technologies-dialog.component.css'],
})
export class TechnologiesDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<TechnologiesDialogComponent>) {}

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }
}
