/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaración de la clase Rectangle. hereda de Shape y simboliza la forma de un rectángulo
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 01.05.2020
 */

'use stric'

import Box from './Box.js';
import Point from './Point.js';

/** 
* Clase Board. Representa un tablero. Cada ranura del tablero es un Box.
*/
class Board {
  /**
   * @static
   * Representa los únicos valores de las columnas dentro del tablero
   */
  static column = ['a','b','c','d','e','f','g','h','i','j','k','l',
                'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];


  /**
   * Constructor de la clase Board
   * @param {Number} width Ancho de las cuadrículas
   * @param {Number} height Alto de las cuadrículas
   * @param {Number} horizontalBoxes Número de cajas horizontales
   * @param {Number} verticalBoxes Número de cajas verticales
   */
  constructor(horizontalBoxes, verticalBoxes) {
    this.width = 0;
    this.height = 0;
    this.horizontalBoxes = horizontalBoxes;
    this.verticalBoxes = verticalBoxes;
    this.elements = {};
  }

  /**
   * Construye el tablero.
   * @param {Number} width Ancho del tablero
   * @param {Number} height Alto del tablero
   * @param {Array} pattern Array de colores en formato CSS. Se imprimirán en orden ciclico.
   * @param {Number} horizontalBoxes Número de cajas horizontales
   * @param {Number} verticalBoxes Número de cajas verticales
   */
  build(width, height, pattern = ['red', 'blue'], horizontalBoxes = this.horizontalBoxes, verticalBoxes = this.verticalBoxes) {
    this.width = Math.round(width / horizontalBoxes);
    this.height = Math.round(height / verticalBoxes);
    let index = 0;

    for (let i = 0; i < this.horizontalBoxes; i++) {
      for (let j = 0; j < this.verticalBoxes; j++) {
        let auxBox = new Box('unknown', null,
                  new Point(this.width * (j), this.height * i),
                  this.width, this.height);
        if (index >= pattern.length) {
          index = 0;
        }
        auxBox.fillStyle = pattern[index++];
        this.elements[this.translate(i, j)] = auxBox;
      }
    }
  }

  /**
   * @param {Array} standarPatern Array de colores CSS. En base a los colores dados hace un patrón: 
   * color1 color2 color3 ... colorN en bucle hasta completar el tamaño horizontal del tablero. Después,
   * inserta el mismo patrón que el anterior pero invertido.
   * @return {Array} Array de colores CSS
   */
  makeAsimetricPatern(standarPatern) {
    let patern = [];
    let index = 0;
    let last;
  
    // Caso simétrico
    for (let i = 0; i < this.horizontalBoxes; i++) {
      if (index >= standarPatern.length) index = 0;
      patern.push(standarPatern[index++]);
    }
    last = patern.length - 1;
    index = last;
    // Caso asimétrico
    if (this.verticalBoxes % 2 != 0 && this.horizontalBoxes % 2 != 0) index--;               // Si es un tablero cuadrático impar
    for (let i = 0; i < this.horizontalBoxes; i++) {
      if (index < 0) {
        if (this.verticalBoxes % 2 != 0 && this.horizontalBoxes % 2 != 0) index = last - 1;  // Si es un tablero cuadrático impar
      }
      patern.push(patern[index--]);
    }
    return patern;
  }

  /**
   * Introduce elementos importables mediante un json
   * @param {String} src Ruta de fichero JSON para insertar elementos imagen
   * a sus cajas correspondientes
   */
  importElements(json) {
    for (const key in json) {
      this.elements[json[key].pos].id = key;
      this.elements[json[key].pos].element = new Image();
      this.elements[json[key].pos].element.src = json[key].src;
    }
  }

  /**
   * Inserta un elemento dentro de una posición del tablero.
   * @param {Number} colum Columna del tablero
   * @param {Number} row Fila del tablero
   * @param {*} element Elemento a insertar
   */
  setElement(row, colum, element) {
    this.elements[this.translate(row, colum)].element = element;
  }

  /**
   * Traduce las coordenadas númericas a algebráicas
   * @param {Number} colum Columna del tablero
   * @param {Number} row Fila del tablero
   * @return {String} Cadena en formato algebráico
   */
  translate(row, colum) {
    let positionKey = '';
    positionKey = Board.column[colum] + (row + 1)
    return positionKey;
  }

  /**
   * TODO: Para hacer el Ajedrez
   * @param {*} element Un elemento de los elementos del tablero
   * @param {*} to Posición a cambiar de posición en notación algebráica
   * @return {boolean} Retornará si se pudo hacer el movimiento o no.
   */
  move(element, to) {
    let isPosible = false;
    return isPosible;
  }

  /* istanbul ignore next   */
  /**
   * Se encarga de dibujar la figura que representa la clase
   * @param {Context} ctx Contexto del canvas, preferiblemente '2d'
   */
  draw(ctx) {
    const colRegex = /^\w1$/;    // Variables situacionales
    const rowRegex = /a\d+/;    // Variables situacionales
    if (ctx != null) {
      ctx.font = '12px Arial';
      for (let key in this.elements) {
        this.elements[key].draw(ctx);
        if (colRegex.test(key) || rowRegex.test(key)) {                                         // Condicional situacional
          ctx.fillStyle = 'black';
          ctx.fillText(key, this.elements[key].start.x + 5, this.elements[key].start.y + 12);
        }
      }
    }
  }

}

export default Board;