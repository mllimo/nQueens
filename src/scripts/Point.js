/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaration of the class Point where it represents a mathematical point
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 05.03.2020
 */

'use strinc'

import Shape from "./Shape.js";

/** 
 * Representa una coordenada en el plano
*/
class Point extends Shape{
  /**
   * Constructor de la clase punto
   * @param {number} x_ Coordinates of x position
   * @param {number} y_ Coordinates of y position
   */
  constructor(x_ = 0, y_ = 0) {
    super();
    this.x = x_;
    this.y = y_;
  }

  /**
   * Asigna las coordenadas al punto
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */
  set(coodinates) {
    this.x = coodinates[0];
    this.y = coodinates[1];
  }

  /**
   * @return {Array} retorna las coordenadas que almacena la clase punto en forma de array.
   */
  get() {
    return [this.x, this.y];
  }

  /* istanbul ignore next */
  /**
   * Se encarga de dibujar la figura que representa la clase
   * @param {Context} ctx Contexto del canvas, preferiblemente '2d'
   */
  draw(ctx) {
    if (ctx != null) {
      this.baseDraw(ctx);
      ctx.rect(this.x, this.y, 1, 1);
      ctx.stroke();
      ctx.fill();
    }
  }
};

export default Point;
