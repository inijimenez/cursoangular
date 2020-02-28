import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Febrero';
  variable = {
    nombre: ''
  };

  changeName() {
    this.variable.nombre = "Pepe";
  }

  sayHello(element: any) {
    this.variable.nombre = element.value;
    alert(`Hola ${this.variable.nombre}`);
  }
}
