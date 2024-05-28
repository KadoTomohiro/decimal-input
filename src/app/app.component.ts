import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DecimalInputComponent} from "./decimal/decimal-input/decimal-input.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Decimal} from "./decimal/decimal";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DecimalInputComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'decimal-input';

  decimalValue = new Decimal({integerPart: 0, decimalPart: 0})
  dec: FormControl = new FormControl<Decimal>(this.decimalValue)
}
