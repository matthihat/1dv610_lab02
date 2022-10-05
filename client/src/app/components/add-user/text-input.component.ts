import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { formOptions } from 'src/app/models/forms/text-input.model';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, AfterViewInit {

  @Input() formOptions: formOptions | undefined;
  @Output() textEvent = new EventEmitter<string>()
  private REQUIRED = 'required'
  private MINLENGTH = 'minlength'
  private MAXLENGTH = 'maxlength'

  @ViewChild('submitButton')
  private submitButton!: MatButton;

  constructor() { }

  formControl: FormControl | undefined

  ngOnInit(): void {
    this.formControl = this.createFormControls()
  }

  ngAfterViewInit(): void {
    this.toggleSubmitButton()
  }

  public onInput() {
    this.toggleSubmitButton()
  }

  public onTextInput() {
    if (this.isFormValid()) {
      this.emitTextEvent()
    }
  }

  //TODO gör ett objekt med felmeddelande o error-strind desc?
  public getErrorMessage(): string {
    if(this.formControl?.hasError(this.REQUIRED) && this.formOptions?.validators.required.errorMessage) {
      return this.formOptions.validators.required.errorMessage
    }

    if(this.formControl?.hasError(this.MINLENGTH) && this.formOptions?.validators.minLength.errorMessage) {
      return this.formOptions.validators.minLength.errorMessage
    }

    if(this.formControl?.hasError(this.MAXLENGTH) && this.formOptions?.validators.maxLength.errorMessage) {
      return this.formOptions.validators.maxLength.errorMessage
    }

    return ''
  }

  get placeholder() {
    return this.formOptions ? this.formOptions.placeholder : ""
  }

  private createFormControls() {
    if (this.formOptions?.validators.minLength) {
      return new FormControl('', [Validators.required, Validators.minLength(this.formOptions.validators.minLength.length), Validators.maxLength(this.formOptions.validators.maxLength.length)])
    }
    return new FormControl()
  }

  private isFormValid() {
    if (this.formControl?.valid && this.formControl.value) {
      return true
    }
    return false
  }

  private emitTextEvent() {
    if(this.formControl?.value) {
      this.textEvent.emit(this.formControl.value)
    }
  }

  private toggleSubmitButton() {
    this.submitButton.disabled = true
    if(this.formControl?.invalid) {
      this.submitButton.disabled = true
    } else {
      this.submitButton.disabled = false
    }
  }
}
