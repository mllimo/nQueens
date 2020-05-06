/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Script principal del programa que simulará el problemas de las ocho reinas y además dibuajará
 * las fichas del ajedrez junto al tablero.
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 01.05.2020
*/

import Board from './Board.js';
import Layers from './Layers.js';
import chess from '../../data/json/chess.js';

//TODO:


// Atributos HTML
let canvas;
let ctx;
let check;
let solveButton;
let nextSolutionButton;
let chessButton;

//  Atriburos lógicos
let queen = new Image();
queen.src = '../../data/chess/reinaNegro.png';
let layers = new Layers();
let NQUEENS;
let counter = 0;
let nSolution = 0;
let img = [];                                   // Cargamos las imagenes en la cache
let loadimages = 0;                             // Podria ser util como flag
let chessPaternColor = ['Moccasin', 'Peru'];

if (document != null) {
  // Asignación
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  solveButton = document.getElementById('solve');
  nextSolutionButton = document.getElementById('next-solution');
  chessButton = document.getElementById('chessGame');
  check = document.getElementById('8queensClasic');

  // Eventos
  nextSolutionButton.addEventListener('click', setNext);
  solveButton.addEventListener('click', main);
  window.addEventListener('load', start);
  chessButton.addEventListener('click', showChess);
}

/**
 * Ejecutará la función principal del script: Generar una solucíon de 8 reinas
 */
function main() {
  counter = 0;
  nSolution = 0;
  queens();
}

/**
 * Cada vez que se pulse el botón de "Siguiente solución" mostrará la solución 
 * siguiente a la anterior
 */
function setNext() {
  counter++;
  queens();
}


/**
 * Nada más cargar la página se ejecutará esta función
 */
function start() {
  preloadImages();
  let board = new Board(8, 8);
  let paternColor = board.makeAsimetricPatern(chessPaternColor);
  board.build(canvas.width, canvas.height, paternColor);
  board.draw(ctx);
}

/**
 * Inicializa el problema de las N reinas recursivo
 */
async function queens() {
  if (check.checked) {
    // Generalizado
    NQUEENS = parseInt(document.getElementById('queens').value);
  } else {
    // 8 reinas clásico
    NQUEENS = 8;
  }

  let board = new Board(NQUEENS, NQUEENS);
  let paternColor = board.makeAsimetricPatern(chessPaternColor);
  board.build(canvas.width, canvas.height, paternColor);
  await nQueensProblem(board);
  nSolution = 0;
}

/**
 * Generalización del problema de las 8 reinas
 * @param {Board} board Tablero con el que trabajar. Tiene que estar instanciado
 * @param {Number} numberOfQueens Número de reinas insertadas en el tablero
 * @param {Number} maxQueens Número objetivo de reinas en el tablero
 */
async function nQueensProblem(board, numberOfQueens = 0, maxQueens = NQUEENS) {
  let exitFlag = false;
  if(numberOfQueens === maxQueens) {
    if (nSolution == counter) {
      board.draw(ctx);
      await showSteps(board);
      return true;                    // Flag para no continuar y optimizar la función "paso a paso"
    }
    nSolution++;
    return false;
  }

  for(let i = 0; i < maxQueens && !exitFlag; i++){
    if(isSafe(i, numberOfQueens, board)){
      board.elements[board.translate(i, numberOfQueens)].element = queen;
      exitFlag = await nQueensProblem(board, numberOfQueens + 1);
      board.elements[board.translate(i, numberOfQueens)].element = null;
    }
  }
  return exitFlag;
}

/**
 * Compruba si es posible insertar una nueva reina
 * @param {Numer} colum Columna donde podría estar la nueva reina
 * @param {Numer} row Fila donde podría estar la nueva reina
 * @param {Board} board Contexto del tablero
 * @return {Boolean} True si es posible insertar la nueva reina : false
 */
function isSafe(row, colum, board) {
  // Comprobamos que la casilla no esté ocupada
  if (board.elements[board.translate(row, colum)].element != null) {
    return false;
  }
  // Comprobamos las filas
  for (let i = 0; i < board.verticalBoxes; i++) {
    if (board.elements[board.translate(i, colum)].element != null) {
      return false;
    }
  }
  // Comprobamos las columnas
  for (let i = 0; i < board.horizontalBoxes; i++) {
    if (board.elements[board.translate(row, i)].element != null) {
      return false;
    }
  }
  // Comprobamos las diagonales | No muy eficientemente
  for (let i = 0; i < board.verticalBoxes; i++) {
    for (let j = 0; j < board.horizontalBoxes; j++) {
      if (board.elements[board.translate(i, j)].element != null) {
        if (i - j === row - colum || i + j === row + colum ||
            j - colum === i - row || j - colum === row - i) {
          return false;
        }
      }
    }
  }
  return true;
}

/**
 * Muestra un tablero del ajedrez por pantalla
 */
function showChess() {
  let board = new Board(8, 8);
  let paternColor = board.makeAsimetricPatern(chessPaternColor);
  board.build(canvas.width, canvas.height, paternColor);
  board.importElements(chess);
  board.draw(ctx);
}

/**
 * Muestra las posiciones de las reinas dentro de una lista ordenada en el 
 * HTML
 * @param {Board} board Tablero
 */
function showSteps(board) {
  let i = 0;
  let j = 0;
  let isMatch = false;
  let exist = true;
  let parentTag = document.getElementById('steps');

  // Eliminamos las anteriores
  let counter = 0;
  let auxElement;
  while (auxElement = document.getElementById('step' + counter++)) {
    auxElement.remove();
  }

  for (let queen = 0; queen < NQUEENS; queen++) {
    //  Mostramos 
    let li = document.getElementById('step' + queen);
    if (li === null) {
      exist = false;
      li = document.createElement('li');
      li.setAttribute('id', 'step' + queen);
    }
    //  Buscamos la reina queen
    for (; i < board.verticalBoxes && !isMatch; i++) {
      for (j = 0; j < board.horizontalBoxes && !isMatch; j++) {
        if (board.elements[board.translate(i,j)].element != null) {
          if (!exist) {
            li.appendChild(document.createTextNode(board.translate(i,j)));
          } else {
            document.getElementById('step' + queen).innerHTML = board.translate(i,j);
          }
          isMatch = true;
        }
      }
    }
    isMatch = false;
    parentTag.appendChild(li);
  }
}

/**
 * Carga en el cache las imagenes a cargar posteriormente
 */
function preloadImages() {
  for (const key in chess) {
    img.push(new Image());
    img[img.length - 1].src = chess[key].src;
    img[img.length - 1].addEventListener("load", function () {loadimages++;}, true);
  }
}

