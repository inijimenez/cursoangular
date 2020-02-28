import { Component } from '@angular/core';

@Component({
  selector: 'app-minigame',
  templateUrl: './minigame.component.html',
  styleUrls: ['./minigame.component.css']
})
export class MinigameComponent {

  historialPartidas : any[] = [];

  constructor() { }

  getComputerChoice() {
    const computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice){
      case 0:
        return 'piedra';
      case 1:
        return 'papel';
      case 2:
        return 'tijeras';
      default:
        console.log('Error en el matrix');
        break;
    }
  }

  determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return '¡Empate!';
    }
    else if (userChoice === 'piedra') {
      if (computerChoice === 'papel') {
        return '¡Perdiste!';
      } else {
        return '¡Ganaste!';
      }
    }
    else if (userChoice === 'papel') {
      if (computerChoice === 'tijeras') {
        return '¡Perdiste!';
      } else {
        return '¡Ganaste!';
      }
    }
    else if (userChoice === 'tijeras') {
      if (computerChoice === 'piedra') {
        return '¡Perdiste!';
      } else {
        return '¡Ganaste!';
      }
    }
    else return 'Input no válido';
  }

  playGame(userChoice){
    const computerChoice = this.getComputerChoice();
    const resultado = this.determineWinner(userChoice, computerChoice);
    // alert('Has elegido: ' + userChoice + '\nY la máquina elige: ' + computerChoice + '\n'+ resultado);
    alert(`Has elegido: ${userChoice} \nY la máquina elige: ${computerChoice} \n${resultado}`);

    
    const partida = {
      'eleccionMaquina' : computerChoice,
      'eleccionJugador' : userChoice,
      'resultado' : resultado,
      'color': ''
    };
    if (resultado === "¡Ganaste!") {
      partida.color = 'green';
    }
    else if (resultado === "¡Perdiste!") {
      partida.color = 'red';
    }
    else {
      partida.color = 'yellow';
    }
    this.historialPartidas.push(partida);
  }

}
