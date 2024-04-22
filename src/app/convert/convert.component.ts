import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {

//Properties
 meter: number = 0;
 celcius: number = 0;
 resultFot: number = 0;
 resultFahrenheit: number = 0;

 //Methods
convertMeterToFoot(): void {
this.resultFot = this.meter * 3,28084;  
}

convertCelciusToFahrenheit(): void{
   this.resultFahrenheit = (this.celcius * 9/5) + 32;
}

clearConvert(): void{
  this.meter = 0,
  this.celcius = 0,
  this.resultFot = 0;
  this.resultFahrenheit = 0;
}
}
