import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rabi-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RabiInputComponent,
    multi: true
  }]
})
export class RabiInputComponent implements OnInit,ControlValueAccessor {
  @Input() parentForm!: FormGroup
  @Input() filedName!:string
  @Input() labelText!:string
  @Input() placeholderText!:string
  @Input() setWidth!:string
  @Input() setHeight!:string
  @Input() type!:string
  @Input() errorMessage!:string
  
  value!:string
  onChange!: (value:string) => void
  onTouched!: () => void
  isDisable!:boolean


  ngOnInit(): void {
    this.placeholderText = this.placeholderText.length ? this.placeholderText : 'Default Placeholder'
  }

  get formField() : FormControl{
    return this.parentForm.get(this.filedName) as FormControl;
  }

  writeValue(obj: any): void {
    this.value=obj
  }

  onEnter(e:any){
    this.onChange(e.target.value)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisable = isDisabled
  }


}
