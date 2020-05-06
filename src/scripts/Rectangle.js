/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaración de la clase Rectangle. hereda de Shape y simboliza la forma de un rectángulo
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 14.03.2020
 */

'use stric'

import Shape from "./Shape.js";
import Point from "./Point.js";

/** 
 * @extends Shape
 * hereda de de Shape y simboliza la forma de un rectángulo dentro
 * de un canvas.
*/
class Rectangle extends Shape {
  /**
   * Constructor de Rectangle
   * @param {Point} start Punto del triángulo.  Por defecto está asignado a (0, 0)
   * @param {number} width Punto del triángulo Por defecto está asignado a 0
   * @param {number} height Punto del triángulo Por defecto está asignado a 0
   */
  constructor(start = new Point(0, 0), width = 0, height = 0) {
    super();
    this.start = start;
    this.width = width;
    this.height = height;
  }

  /**
   * Retorna el área del rectángulo
   * @return {Number} Área del rectángulo
   */
  area() {
    return this.width * this.height;
  }

  /**
   * Retorna el perímetro del rectángulo
   * @return {Number} Perímetro del rectángulo
   */
  perimeter() {
    return this.width + this.height
  }

  /* istanbul ignore next   */
  /**
   * Se encarga de dibujar la figura que representa la clase
   * @param {Context} ctx Contexto del canvas, preferiblemente '2d'
   */
  draw(ctx) {
    if (ctx != null) {
      this.baseDraw(ctx);
      ctx.rect(this.start.x, this.start.y, this.width, this.height);
      ctx.stroke();
      ctx.fill();
    }
  }
}

export default Rectangle;