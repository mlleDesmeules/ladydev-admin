import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ace-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CodeEditorComponent),
    }
  ],
})
export class CodeEditorComponent implements ControlValueAccessor {

  @Input() mode = 'html';
  @Input() readOnly = false;
  @Input() autoUpdateContent = true;
  @Input() durationBeforeCallback = 1000;

  /**
   * Gets called when the editor's value is about to change
   * @type {EventEmitter<string>} The editor's new value
   */
  @Output() textChange = new EventEmitter<string>();

  /**
   * Gets called when the editor's value has changed
   * @type {EventEmitter<string>} The editor's new value
   */
  @Output() textChanged = new EventEmitter<string>();

  options = {
    maxLines: 30,
    wrap: true,
    autoScrollEditorIntoView: true
  };

  _value: string;

  _changeFn: (_: any) => void;
  _touchedFn: any;

  constructor() { }

  // ControlValueAccessor implementation

  registerOnChange(fn: (_: any) => void): void {
    this._changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this._touchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.readOnly = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }


  // Event handling

  onTextChange(text: string) {
    this._value = text;

    if (this._changeFn) {
      this._changeFn(text);
    }

    this.textChange.emit(text);
  }

  onTextChanged(text: string) {
    this._value = text;

    if (this._changeFn) {
      this._changeFn(text);
    }

    this.textChanged.emit(text);
  }


  // Property accessors

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this.onTextChange(value);
    this._value = value;
    this.onTextChanged(value);
  }

}
