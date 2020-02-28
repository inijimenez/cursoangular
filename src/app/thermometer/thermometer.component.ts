import { Component, OnInit } from '@angular/core';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit {

  // Variables globales a pintar en la plantilla HTML
  celsius: number;
  kelvin: number;
  fahrenheit: number;
  newton: number;
  imgTemperatureSrc = '';
  itsCold: boolean;

  constructor() { }

  // Celsius = Kelvin - 273;
  // Fahrenheit = Celsius * (9/5) + 32;
  // Newtons (extra) = Celsius * (33/100)

  ngOnInit() {
    this.resetAll();
  }

  celsiusToKelvin(celsius) {
    return celsius + 273;
  }

  celsiusToFahrenheit(celsius) {
    return Math.floor(celsius * (9/5) + 32);
  }

  celsiusToNewton(celsius) {
    return Math.floor(celsius * (33/100));
  }

  calculateAllTemperatures() {
    if (isNaN(this.celsius) || this.celsius < 0) { this.celsius = 0; }
    this.kelvin = this.celsiusToKelvin(this.celsius);
    this.fahrenheit = this.celsiusToFahrenheit(this.celsius);
    this.newton = this.celsiusToNewton(this.celsius);

    this.imgTemperatureSrc = this.celsius > 30 ? '../assets/sun.png' : '../assets/cloud.png';
    this.itsCold = this.celsius > 30 ? false : true;
  }

  checkNullTemperature() {
    if (!this.celsius || isNaN(this.celsius) || this.celsius < 0) this.resetAll();
  }

  resetAll() {
    this.celsius = 0;
    this.calculateAllTemperatures();
  }

}
