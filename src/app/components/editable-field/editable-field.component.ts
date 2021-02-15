import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlNameValue } from './types/control-value.type';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.css'],
})
export class EditableFieldComponent {
  @Input() value: string;

  @Input() controlName: string;

  @Output() updateValue: EventEmitter<ControlNameValue> = new EventEmitter<ControlNameValue>();

  editView = false;

  openEditView(): void {
    this.editView = true;
  }

  emitNewValue(): void {
    this.updateValue.emit({ controlName: this.controlName, value: this.value } as ControlNameValue);
  }
}
