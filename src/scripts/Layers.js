/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaración de la clase Layers. Simboliza las capas del canvas. Puediendo dar
 * prioridad de dibujado a elementos respecto a otros
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 02.05.2020
 */

'use stric'

/** 
  Clase Layers
  Los elementos de indice menor se dibuajrán primero respecto a los de indice mayor
*/
class Layers {
  /**
   * Constructor de la clase Layers
   */
  constructor () {
    this.elements = [];
  }

  /* istanbul ignore next   */
  /**
   * Se encarga de dibujar los elementos de forma ordenada
   * @param {Context} ctx Contexto del canvas, preferiblemente '2d'
   */
  draw(ctx) {
    if (ctx != null) {
      for (let element of this.elements) {
        element.draw(ctx);
      }
    }
  }

}

export default Layers;