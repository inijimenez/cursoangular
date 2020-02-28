export interface UserInterface {
  id?: number;
  name?: string;
  surnames?: string;
  edad?: number;
  dni?: string;
  email?: string;
  toString();
}

export class Profesor implements UserInterface {
  id?: number;
  name?: string;
  surnames?: string;
  edad?: number;
  dni?: string;
  email?: string;

  constructor(id?: number, name?: string, surnames?: string, edad?: number, dni?: string, email?: string) {
    this.id = id || null;
    this.name = name || null;
    this.surnames = surnames || null;
    this.edad = edad || null;
    this.dni = dni || null;
    this.email = email || null;
  }

  toString() {
    console.log(`Profesor: ${this.name} ${this.surnames}`);
  }
}

export class Alumno implements UserInterface {
  id?: number;
  name?: string;
  surnames?: string;
  edad?: number;
  dni?: string;
  email?: string;

  constructor(id?: number, name?: string, surnames?: string, edad?: number, dni?: string, email?: string) {
    this.id = id || null;
    this.name = name || null;
    this.surnames = surnames || null;
    this.edad = edad || null;
    this.dni = dni || null;
    this.email = email || null;
  }

  toString() {
    console.log(`Alumno: ${this.name} ${this.surnames}`);
  }
}