import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlNameValue } from './types/control-value.type';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.scss'],
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

  getSize(): number {
    return this.value.length > 80 ? 80 : this.value.length;
  }
}
