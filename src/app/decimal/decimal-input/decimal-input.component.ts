import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Decimal} from "../decimal";

@Component({
  selector: 'app-decimal-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './decimal-input.component.html',
  styleUrl: './decimal-input.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DecimalInputComponent),
    multi: true
  }]
})
export class DecimalInputComponent implements ControlValueAccessor{
  value: Decimal = {
    integerPart: 0,
    decimalPart: 0
  };
  onChange: Function = () => {};
  onTouched: Function = () => {};

  writeValue(value: Decimal): void {
    if(!Decimal.isDecimal(value)) throw new TypeError('DecimalInputComponent need Decimal Object')
    this.value = value;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  inputDec() {
    let {decimalPart} = this.value

    if (Number.isNaN(decimalPart)) decimalPart = 0

    if (!Number.isInteger(decimalPart)) decimalPart = Math.trunc(decimalPart)

    if (decimalPart < 0) decimalPart = Math.abs(decimalPart)

    this.value.decimalPart = decimalPart;
    this.onChange(this.value);
  }
}
