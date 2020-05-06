/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaración de la clase Queen. Simula el comportamiento 
 * de la reina dentro el ajedrez
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 01.05.2020
 */

'use stric'

import Piece from './Piece.js';

/** 
* Clase Queen. Simula el comportamiento 
* de la reina dentro el ajedrez
*/
class Queen  extends Piece {

  /**
   * Constructor de la clase Queen
   * @param {image} sprite Imagen que representará a la figura
   */
  constructor(sprite) {
    super(sprite);
    this.moves = [];
  }

  /* istanbul ignore next   */
  /**
   * Se encarga de dibujar la figura que representa la clase
   * @param {Context} ctx Contexto del canvas, preferiblemente '2d'
   */
  draw(ctx) {
    if (ctx != null) {
      super.draw(ctx);
    }
  }

}

export default Queen;