/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaración de la clase Box. hereda de Rectangle y simboliza un contenedor gráfico y estructural
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 01.05.2020
 */

'use stric'

import Rectangle from './Rectangle.js';
import Point from './Point.js';

/** 
 * Hereda de Rectangle y representa un contenedor. Contiene un identificador y un elemento.
 * Dicho elemento tiene que tener una función para poder ser dibujado en canvas con nombre draw. El elemento
 * se dibujará relativamente al Box.
 * @extends Shape
*/
class Box extends Rectangle {
  /**
   * Contructor de la clase Box
   * @param {*} id identificador del contenedor
   * @param {*} element Elemento a almacenar
   * @param {Point} start Punto del triángulo.  Por defecto está asignado a (0, 0)
   * @param {number} width Punto del triángulo Por defecto está asignado a 0
   * @param {number} height Punto del triángulo Por defecto está asignado a 0
   */
  constructor(id, element, start = new Point(0, 0), width = 0, height = 0) {
    super(start, width, height);
    this.id = id;
    this.element = element;
  }

  /* istanbul ignore next   */
  /**
   * Se encarga de dibujar la figura que representa la clase
   * @param {Context} ctx Contexto del canvas, preferiblemente '2d'
   */
  draw(ctx) {
    if (ctx != null) {
      super.draw(ctx);
      if (this.element != null) {
        ctx.save();
        ctx.translate(this.start.x, this.start.y);
        
        // Controlamos el tipo de elemento
        if (this.element instanceof Image) {
          let auxFun = function() {
            ctx.drawImage(this.element, 0, 0,
              this.width, this.height);
          };
          this.element.onload = auxFun.call(this);
        } else {
          this.element.draw(ctx);
        }

        ctx.restore();
      }
    }
  }

}

export default Box;