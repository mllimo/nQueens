/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaración de la clase Piece. Generalización de las figuras de ajedrez
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 01.05.2020
 */

'use stric'

/** 
* Clase Piece. Simula el comportamiento de un figura de ajedrez genérica
*/
class Piece {
  /**
   * Constructor de la clase Piece
   * @param {image} sprite Imagen que representará a la figura
   */
  constructor(sprite) {
    this.sprite = sprite;
    this.moves = [];
  }

  /* istanbul ignore next   */
  /**
   * Se encarga de dibujar la figura que representa la clase
   * @param {Context} ctx Contexto del canvas, preferiblemente '2d'
   */
  draw(ctx) {
    if (ctx != null) {
      ctx.drawImage(this.sprite, 0, 0);
    }
  }

}

export default Piece;